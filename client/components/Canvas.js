import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {blue} from '@material-ui/core/colors'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  canvas: {
    width: '100%',
    height: '600px',
    backgroundColor: 'blue'
  }
})

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      canvas: []
    }
  }

  clickToSave() {
    alert('save this page')
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <div>
          <button id="save-button" onClick={() => this.clickToSave()}>
            SAVE
          </button>
          <h1> My Canvas</h1>
        </div>
        <canvas id="my-canvas" width="800" height="600" />
      </div>
    )
  }
}

export default Canvas
