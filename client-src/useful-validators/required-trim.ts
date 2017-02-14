import { FormControl } from '@angular/forms'

export function requiredTrim (control: FormControl) {
  let preppedValue = ''

  if (typeof control.value === 'string') {
    preppedValue = control.value
  }
  if (typeof control.value === 'number') {
    preppedValue = control.value + ''
  }

  if (preppedValue.trim() === '') {
    return {
      requiredTrim: true
    }
  } else {
    return null
  }
}
