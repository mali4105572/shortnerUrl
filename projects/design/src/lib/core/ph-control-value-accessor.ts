import { ControlValueAccessor, NgControl } from '@angular/forms';
import { OnDestroy, Injectable, Optional, Self } from '@angular/core';

@Injectable()
export abstract class PhControlValueAccessor implements ControlValueAccessor, OnDestroy {

    private _onChange: ((...args) => any)[] = [];
    private _onTouched: ((...args) => any)[] = [];

    private _value: any;
    protected _isAlive: boolean = true;

    get value(): any { return this._value; }
    set value(value: any) {
        this.writeValue(value)
       
    }

    constructor(
        @Optional() @Self() private ngControl: NgControl
    ) {
        this.ngControl && (this.ngControl.valueAccessor = this);
    }

    ngOnDestroy() {
        this._isAlive = false;
    }

    onBlur() {
        this._onTouched.forEach(fn => fn());
    }

    writeValue(value: any): void {
        this._value = value;
        this._onChange.forEach(change => change(value));
    }

    registerOnChange(fn: (...args) => any): void { this._onChange.push(fn) }
    registerOnTouched(fn: any): void { this._onTouched.push(fn) }

    setDisabledState?(isDisabled: boolean): void { }

}