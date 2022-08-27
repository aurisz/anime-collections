import GridLayout from '../../components/GridLayout'
import Card from '../../components/Card'

import type { AnimeCollection } from '../../types'

interface Props {
  collections: AnimeCollection[]
}

const CollectionList = ({ collections }: Props) => (
  <GridLayout>
    {collections.map(collection => (
      <Card
        key={collection.name}
        title={collection.name}
        link={`/collection/${collection.name}`}
        image={collection.list[0]?.coverImage.large}
      />
    ))}
  </GridLayout>
)

export default CollectionList
