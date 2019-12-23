import { IApi } from 'umi-types';
import * as path from 'path';

export default (api: IApi) => {
  api.onGenerateFiles(() => {
    api.writeTmpFile(
      path.join('layout', 'Layout.tsx'),
      `export default (props) => <div>Hello {props.children}</div>`
    )
  })

  api.modifyRoutes(routes => {
    return [{
      path: '/',
      component: path.join(api.paths.absTmpDirPath, 'layout', 'Layout.tsx'),
      routes,
    }]
  })
}
