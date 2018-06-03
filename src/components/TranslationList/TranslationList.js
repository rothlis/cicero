import React, { Component } from 'react'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from 'react-virtualized'
import flatten from 'flat'

import TranslationRow from '../TranslationRow'

import enJSON from './en.json'

const translationsObject = flatten(enJSON)
const translationsEntries = Object.entries(translationsObject)

class TranslationList extends Component {
  constructor(props, context) {
    super(props, context)

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 50,
    })

    this._rowRenderer = this._rowRenderer.bind(this)
  }

  render() {
    return (
      <div className="TranslationContent">
        <AutoSizer>
          {({ height, width }) => (
            <List
              deferredMeasurementCache={this._cache}
              height={height}
              overscanRowCount={0}
              rowCount={translationsEntries.length}
              rowHeight={this._cache.rowHeight}
              rowRenderer={this._rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    )
  }

  _rowRenderer({ index, key, parent, style }) {
    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        <div style={style}>
          <TranslationRow
            style={style}
            translation={translationsEntries[index]}
          />
        </div>
      </CellMeasurer>
    )
  }
}

export default TranslationList
