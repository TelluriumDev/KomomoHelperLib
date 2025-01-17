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
    setContent(content: string): this

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
     * @param reasen 回调函数
     */
    sendTo(player: Player, reasen?:
        /**
         * 回调函数
         * @param payer 玩家
         * @param reason 回调参数
         */
        (payer: Player, reason: boolean | FormEnum.ModalFormCancelReason) => {}): boolean
}
