import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest';

import MonacoEditor from '../src/editor.tsx'

describe('MonacoEditor', () => {
  // 组件是否渲染成功。
  test('组件是否渲染成功', () => {
    const wrapper = mount(MonacoEditor, {
      props: {
        value: 'console.log("hello world")'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('当文本编辑器中的内容发生改变时，是否能够通过 emit 事件的方式正确地获取到更新后的内容。', async () => {
    const onChange = vi.fn();
    const value = 'console.log("hello world")';
    const wrapper = mount(MonacoEditor, {
      props: {
        value,
      },
      global: {
        mocks: {
          $emit: onChange,
        },
      },
    });

    const editor = wrapper.vm.getModifiedEditor();
    const newValue = 'console.info("nice to meet you")';

    editor.setValue(newValue);
    await new Promise(resolve => setTimeout(resolve, 100)); // 等待数据更新
    expect(onChange).toHaveBeenCalledWith(newValue, expect.anything())
  })

  test('用户在编辑器中按下“Ctrl+Enter”键时，是否能够正确地触发 triggerCmdEnter 事件。', async () => {
    const onTriggerCmdEnter = vi.fn();
    const value = 'console.log("hello world")';
    const wrapper = mount(MonacoEditor, {
      props: {
        value,
        triggerCmdEnter: onTriggerCmdEnter
      }
    })

    wrapper.trigger('keyup.enter', {
      key: 'Enter',
      code: 'Enter',
      ctrlKey: true,
    });

    await new Promise(resolve => setTimeout(resolve, 100)); // 等待数据更新
    expect(onTriggerCmdEnter).toHaveBeenCalled();
  })
})
