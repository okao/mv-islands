import data from './islands.json';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { Component, Fragment } from 'react';

const atoll_islands = data.map(atoll_island => ({ value: `${atoll_island.atoll}.${atoll_island.name}`, label: `${atoll_island.atoll}.${atoll_island.name}` }))
const animatedComponents = makeAnimated();


export default class MvIslands extends Component {
  render() {
    return (
      <Fragment>
        <Select
          className="mv-islands"
          classNamePrefix="select"
          defaultValue={atoll_islands[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          options={atoll_islands}
          components={animatedComponents}
        />

        <div
          style={{
            color: 'hsl(0, 0%, 40%)',
            display: 'inline-block',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: '1em',
          }}
        >
        </div>
      </Fragment>
    );
  }
}
