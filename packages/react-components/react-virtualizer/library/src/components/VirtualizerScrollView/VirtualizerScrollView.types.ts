import * as React from 'react';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type {
  VirtualizerSlots,
  VirtualizerConfigProps,
  VirtualizerConfigState,
  VirtualizerChildRenderFunction,
} from '../Virtualizer/Virtualizer.types';
import type { ScrollToInterface } from '../../Utilities';

/**
 * @deprecated migrated to \@fluentui\-contrib/react\-virtualizer for stable release.
 */
export type VirtualizerScrollViewSlots = VirtualizerSlots & {
  /**
   * The root container that provides embedded scrolling.
   */
  container: NonNullable<Slot<'div'>>;
};

/**
 * @deprecated migrated to \@fluentui\-contrib/react\-virtualizer for stable release.
 */
export type VirtualizerScrollViewProps = ComponentProps<Partial<VirtualizerScrollViewSlots>> &
  Partial<
    Omit<
      VirtualizerConfigProps,
      'itemSize' | 'numItems' | 'getItemSize' | 'children' | 'flagIndex' | 'imperativeVirtualizerRef'
    >
  > & {
    /**
     * Virtualizer item size in pixels - static.
     * Axis: 'vertical' = Height
     * Axis: 'horizontal' = Width
     */
    itemSize: number;
    /**
     * The total number of items to be virtualized.
     */
    numItems: number;
    /**
     * Child render function.
     * Iteratively called to return current virtualizer DOM children.
     * Will act as a row or column indexer depending on Virtualizer settings.
     */
    children: VirtualizerChildRenderFunction;
    /**
     * Imperative ref contains our scrollTo index functionality for user control.
     */
    imperativeRef?: React.RefObject<ScrollToInterface>;
    /**
     * Imperative ref contains our scrollTo index functionality for user control.
     */
    enablePagination?: boolean;
  };

/**
 * @deprecated migrated to \@fluentui\-contrib/react\-virtualizer for stable release.
 */
export type VirtualizerScrollViewState = ComponentState<VirtualizerScrollViewSlots> & VirtualizerConfigState;
