/// <reference path="../Player/Player.d.ts" />
/// <reference path="./FormEnum.d.ts" />

declare class CustomForm {
    setTitle(title: string): this

    appendLabel(text: string): this

    appendInput(name: string, text: string, placeholder?: string, defaultVal?: string): this

    appendToggle(name: string, text: string, defaultVal?: boolean): this

    appendDropdown(name: string, text: string, options: string[], defaultVal?: number): this

    appendSlider(name: string, text: string, min: number, max: number, step?: number, defaultVal?: number): this

    appendStepSlider(name: string, text: string, steps: string[], defaultVal?: number): this

    sendTo(player: Player, callback?: (player: Player, result: Record<string, any> | FormEnum.ModalFormCancelReason) => void): void
}
