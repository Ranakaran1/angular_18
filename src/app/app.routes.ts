import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { IFElseComponent } from './components/controlFlow/ifelse/ifelse.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component : AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent

    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'structural-dir',
        component : StructuralDirectivesComponent
    },
    {
        path : 'if-else',
        component : IFElseComponent
    },
    {
        path: 'attributedirective',
        component: AttributeDirectiveComponent
    }
];
