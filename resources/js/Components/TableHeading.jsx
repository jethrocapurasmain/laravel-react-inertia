import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'
const TableHeading = ({ name, children,  sortable = true, sort_field = null, sort_direction = null, sortChanged=() => {}}) => {
  return (
    <th onClick={e => sortChanged(name)} >

      <div className='px-3 py-3 flex items-center justify-between gap-1'>
        {sortable &&

            <div className='px-3 py-3 flex items-center justify-between gap-1 cursor-pointer'>
              {children}
              <div>
                <ChevronUpIcon className={'w-4 ' +
                  (sort_field === name &&
                    sort_direction === 'asc' ? 'text-green-500' : ''
                  )
                } />
                <ChevronDownIcon className={'w-4 -mt-2 ' +
                  (sort_field === name &&
                    sort_direction === 'desc' ? 'text-green-500' : ''
                  )
                } />
              </div>
            </div>

          }
      </div>

    </th>
  )
}

export default TableHeading
