import * as React from 'react';
import { customizable, nullRender } from '../../../Utilities';
import { DefaultButton } from '../DefaultButton/DefaultButton';
import type { IButtonProps } from '../Button.types';

/**
 * {@docCategory Button}
 */
@customizable('PrimaryButton', ['theme', 'styles'], true)
export class PrimaryButton extends React.Component<IButtonProps, {}> {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  public render(): JSX.Element {
    return <DefaultButton {...this.props} primary={true} onRenderDescription={nullRender} />;
  }
}
