import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatetimepickerModule } from "@mat-ext/datetimepicker-core";
import { NativeDatetimeComponent } from "./native.component";

@NgModule({
  declarations: [
    NativeDatetimeComponent
  ],
  exports: [
    NativeDatetimeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatetimepickerModule
  ]
})
export class AppNativeModule {
}
