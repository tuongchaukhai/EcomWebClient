import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService } from 'primeng/dynamicdialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports: [

        ],
    exports: [  
        HttpClientModule,
        TableModule,
        MenubarModule,
        InputMaskModule,
        ButtonModule,
        InputTextModule,
        MenuModule,
        ToastModule,
        RouterModule,
        SplitButtonModule,
        DropdownModule,
        KeyFilterModule,
        CardModule,
        InputSwitchModule,
        ChipsModule,
        InputTextareaModule,
        DividerModule,
        PanelModule,
        DialogModule,
        ReactiveFormsModule,
        FormsModule ,
        RippleModule,
        CheckboxModule
    ],
    providers: [
        DialogService
    ],
    declarations: [
      PageNotFoundComponent
    ]
})

export class SharedModule {}