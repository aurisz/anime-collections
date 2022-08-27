import GridLayout from '../../components/GridLayout'
import Card from '../../components/Card'

type Collection = {
  name: string;
  list: {
    id: number;
    coverImage: {
      large: string;
    }
    title: {
      english: string;
    }
  }[]
}

interface Props {
  collections: Collection[]
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
