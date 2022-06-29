import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Wave from "Components/SVG/SidebarWave"

const useStyles = makeStyles(() => ({
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    height: 190,
    width: 226,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wave: {
    width: 250,
    position: 'relative',
    top: -72
  },
  powered: {
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    top: 20,
    fontWeight: 500,
  }
}))

const SidebarSection = (props) => {
  const sectionClass = classNames("sidebar__section", {
    'sidebar__section--fluid': props.fluid,
    'sidebar__section--cover': props.cover
  }, props.className)
  const classes = useStyles()

  return (
    <div className={ sectionClass }>
      { props.children }
      <div className={classes.waveContainer} style={{ background: '#323b47' }}>
        <Wave className={classes.wave} fill={'#323b47'} />
        <div className={classes.powered}>
          Powered by Gluu
        </div>
      </div>
    </div>
  )
}

SidebarSection.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  cover: PropTypes.bool,
  className: PropTypes.string
}

export {
  SidebarSection
}
