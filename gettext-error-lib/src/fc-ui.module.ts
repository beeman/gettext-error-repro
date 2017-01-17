import { NgModule } from '@angular/core'

import { FcTableModule } from './components/fc-table/fc-table.module'

/**
 * Exported Modules
 * @type { Array }
 */
const modules = [
  FcTableModule,
]

/**
 * Exported Providers
 * @type { Array }
 */
const providers = []


/**
 * Exported Declarations
 * @type { Array }
 */
const declarations = []


@NgModule({
  declarations: [...declarations],
  providers: [...providers],
  exports: [ ...declarations, ...modules ],
  imports: [ ...modules ],
})
export class FcUiModule {
}
