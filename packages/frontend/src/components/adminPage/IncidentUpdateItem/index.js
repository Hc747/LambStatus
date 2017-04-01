import React, { PropTypes } from 'react'
import classnames from 'classnames'
import AutolinkedText from 'components/common/AutolinkedText'
import { getDateTimeFormat } from 'utils/datetime'
import classes from './IncidentUpdateItem.scss'

export default class IncidentUpdateItem extends React.Component {
  static propTypes = {
    incidentUpdate: PropTypes.shape({
      incidentUpdateID: PropTypes.string.isRequired,
      incidentStatus: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { incidentUpdate } = this.props
    return (
      <li key={incidentUpdate.incidentUpdateID} className={classnames('mdl-list__item',
        'mdl-list__item--two-line', 'mdl-shadow--2dp', classes.incident_update_item)}>
        <span className={classnames('mdl-list__item-primary-content', classes.incident_update_item_content)}>
          <span>{incidentUpdate.incidentStatus} - updated at {getDateTimeFormat(incidentUpdate.updatedAt)}</span>
          <span className='mdl-list__item-sub-title'>
            <AutolinkedText text={incidentUpdate.message} />
          </span>
        </span>
      </li>
    )
  }
}
