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
        DropdownModule
    ],
    providers: [

    ]
})

export class SharedModule {}