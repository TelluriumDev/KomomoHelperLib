/// <reference path="../Form/CustomForm.d.ts" />
/// <reference path="../Form/SimpleForm.d.ts" />
/// <reference path="../Form/ModalForm.d.ts" />
/// <reference path="../Form/FormEnum.d.ts" />

declare namespace Form {
    /**
     * 创建自定义表单
     * @param title 标题
     */
    function newCustomForm(title: string): CustomForm
    /**
     * 创建简单表单
     * @param title 标题
     * @param content 内容
     */
    function newSimpleForm(title: string, content: string): SimpleForm
    /**
     * 创建模式表单
     * @param title 标题
     * @param content 内容
     * @param upperButton 上按钮
     * @param lowerButton 下按钮
     */
    function newModalForm(title: string, content: string, upperButton: string, lowerButton: string): ModalForm
}
