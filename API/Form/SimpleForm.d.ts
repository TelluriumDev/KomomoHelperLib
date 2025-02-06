/// <reference path="./FormEnum.d.ts" />

declare abstract class SimpleForm {
    /**
     * 设置标题
     * @param title 标题
     */
    setTitle(title: string): this

    /**
     * 设置内容
     * @param content 内容
     */
    setContent(content: string): this

    /**
     * 添加按钮
     * @param button 按钮名称
     */
    appendButton(button: string): this

    /**
     * 添加按钮
     * @param button 按钮名称
     * @param callback 回调函数
     */
    appendButton(button: string, callback:
        /**
         * 回调函数
         * @param player 玩家
         */
        (player: Player) => void): this

    /**
     * 添加按钮
     * @param button 按钮名称
     * @param data 按钮图片
     * @param image 按钮数据 (url or path)
     * @param callback 回调函数
     */
    appendButton(button: string, image: string, data: string, callback:
        /**
         * 回调函数
         * @param player 玩家
         */
        (player: Player) => void): this

    /**
     * 发送表单
     * @param player 玩家
     * @param callback 回调函数
     */
    sendTo(player: Player, callback?:
        /**
         * 回调函数
         * @param player 玩家
         * @param id 按钮id
         * @param reason 取消原因
         */
        (player: Player, id?: number, reason?: FormEnum.ModalFormCancelReason) => void): boolean
}
