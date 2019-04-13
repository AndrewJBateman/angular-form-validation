/*This directive wraps the custom MustMatch validator so we can attach it to the form.
A custom validator directive is required when using template-driven forms because we don't have direct
access to the FormGroup like in reactive forms.
The directive implements the Validator interface and registers itself with the NG_VALIDATORS provider
to let angular know that it's a custom validator directive.
It accepts an array with the names of 2 form controls that must match in order for form validation to
pass, e.g. [mustMatch]="['field1', 'field2']" will validate that field1 and field2 contain the same value,
otherwise a validation error will be set on field2. You can see it's usage in the form tag of the app template
above.*/

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { MustMatch } from './must-match.validator';

@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
    @Input('mustMatch') mustMatch: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
}
