import React, { Component } from 'react'

import FileOpener from '../files/file-opener'

interface RunnableHeaderProps {
  specPath: string,
  relativeSpecPath: string
}

class RunnableHeader extends Component<RunnableHeaderProps> {
  render () {
    const { specPath, relativeSpecPath } = this.props
    const fileDetails = {
      absoluteFile: specPath,
      column: 1,
      line: 1,
      originalFile: relativeSpecPath,
      relativeFile: relativeSpecPath,
    }

    return <FileOpener className="runnable-header" fileDetails={fileDetails} />
  }
}

export default RunnableHeader
