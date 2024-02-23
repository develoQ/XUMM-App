import React, { PureComponent } from 'react';

import { TextPlaceholder } from '@components/General';

import styles from './styles';

import { Props } from './types';
/* Types ==================================================================== */
interface State {
    actionLabel?: string;
}

interface IProps extends Pick<Props, 'item' | 'explainer' | 'participant'> {}
/* Component ==================================================================== */
class ActionBlock extends PureComponent<IProps, State> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            actionLabel: undefined,
        };
    }

    static getDerivedStateFromProps(nextProps: IProps, prevState: State): Partial<State> | null {
        if (typeof nextProps.explainer === 'undefined' || prevState.actionLabel) {
            return null;
        }

        return {
            actionLabel: nextProps.explainer.getEventsLabel() ?? nextProps.item.Type,
        };
    }

    render() {
        const { participant } = this.props;
        const { actionLabel } = this.state;

        return (
            <TextPlaceholder style={styles.actionText} numberOfLines={1} isLoading={!participant || !actionLabel}>
                {actionLabel}
            </TextPlaceholder>
        );
    }
}

export default ActionBlock;
