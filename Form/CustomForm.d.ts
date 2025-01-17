/// <reference path="../Player/Player.d.ts" />
/// <reference path="./FormEnum.d.ts" />

declare abstract class CustomForm {
    /**
     * 设置标题
     * @param title 标题
     */
    setTitle(title: string): this

    /**
     * 添加内容
     * @param text 文本
     */
    appendLabel(text: string): this

    /**
     * 添加输入框
     * @param name 控件唯一标识符
     * @param text 文本
     * @param placeholder 提示值
     * @param defaultVal 默认值
     */
    appendInput(name: string, text: string, placeholder?: string, defaultVal?: string): this

    /**
     * 添加开关
     * @param name 控件唯一标识符
     * @param text 文本
     * @param defaultVal 默认值
     */
    appendToggle(name: string, text: string, defaultVal?: boolean): this

    /**
     * 添加下拉框
     * @param name 控件唯一标识符
     * @param text 文本
     * @param options 选项
     * @param defaultVal 默认值
     */
    appendDropdown(name: string, text: string, options: string[], defaultVal?: number): this

    /**
     * 添加滑块
     * @param name 控件唯一标识符
     * @param text 文本
     * @param min 最小值
     * @param max 最大值
     * @param step 步长
     * @param defaultVal 默认值
     */
    appendSlider(name: string, text: string, min: number, max: number, step?: number, defaultVal?: number): this

    /**
     * 添加步骤条
     * @param name 控件唯一标识符
     * @param text 文本
     * @param steps 步骤
     * @param defaultVal 默认值
     */
    appendStepSlider(name: string, text: string, steps: string[], defaultVal?: number): this

    /**
     * 发送给玩家
     * @param player 玩家
     * @param callback 回调函数
     */
    sendTo(player: Player, callback?:
        /**
         * @param player 玩家
         * @param result 结果 {"控件唯一标识符": 值} | 表单取消原因
         */
        (player: Player, result: Record<string, any> | FormEnum.ModalFormCancelReason) => void): boolean
}
