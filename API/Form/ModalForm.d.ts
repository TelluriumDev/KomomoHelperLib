/// <reference path="../Player/Player.d.ts" />

declare abstract class ModalForm {
    /**
     * 设置标题
     * @param title 标题
     */
    setTitle(title: string): this

    /**
     * 设置内容
     * @param text 内容
     */
    setContent(text: string): this

    /**
     * 设置上按钮
     * @param text 文本
     */
    setUpperButton(text: string): this

    /**
     * 设置下按钮
     * @param text 文本
     */
    setLowerButton(text: string): this

    /**
     * 发送给玩家
     * @param player 玩家
     * @param callback 回调函数
     */
    sendTo(player: Player, callback?:
        /**
         * 回调函数
         * @param player 玩家
         * @param result 回调参数
         */
        (player: Player, result: boolean | FormEnum.ModalFormCancelReason) => void): boolean
}
