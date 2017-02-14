import { FormControl } from '@angular/forms'

export function requiredTrim (control: FormControl) {
  if (!control.value || control.value && control.value.trim() === '') {
    return {
      requiredTrim: false
    }
  } else {
    return null
  }
}
