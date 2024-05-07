import { ProductListConfig } from 'src/types/product.type'
import useQueryParams from './useQueryParams'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

export type QueyryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function useQueryConfig() {
  const queryParams: QueyryConfig = useQueryParams()
  const queryConfig: QueyryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '10',
      sort_by: queryParams.sort_by,
      order: queryParams.order,
      exclude: queryParams.exclude,
      rating_filter: queryParams.rating_filter,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      name: queryParams.name,
      category: queryParams.category
    },
    isUndefined
  )
  return queryConfig
}
