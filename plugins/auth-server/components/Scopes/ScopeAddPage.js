import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, CardBody, Card } from '../../../../app/components'
import ScopeForm from './ScopeForm'
import { addScope } from '../../redux/actions/ScopeActions'

function ScopeAddPage({ scripts, dispatch }) {

  const history = useHistory()
  function handleSubmit(data) {
    console.log('ScopeAdd :  handleSubmit() - data = ' + data)
    if (data) {
      const postBody = {}
      postBody['scope'] = JSON.parse(data)
      dispatch(addScope(postBody))
      history.push('/auth-server/scopes')
    }
  }

  const scope = {
    claims: [],
    defaultScope: false,
    groupClaims: false,
    attributes: {
      spontaneousClientId: null,
      spontaneousClientScopes: [],
      showInConfigurationEndpoint: 'false',
    },
  }

  return (
    <React.Fragment>
      <Container>
        <Card className="mb-3">
          <CardBody>
            <ScopeForm scope={scope} scripts={scripts} handleSubmit={handleSubmit} />
          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    loading: state.scopeReducer.loading,
    hasApiError: state.scopeReducer.hasApiError,
    scripts: state.initReducer.scripts,
  }
}
export default connect(mapStateToProps)(ScopeAddPage)
