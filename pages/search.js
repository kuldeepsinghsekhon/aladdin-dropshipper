import React from 'react';
import {Page,Avatar,Filters, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';

const items = [
  {
    id: 341,
    url: 'customers/341',
    name: 'Boxy T-Shirt with Roll Sleeve Detail',
    avatarSource:
          'https://cdn.shopify.com/s/files/1/0257/4339/2814/products/item-03_590x.jpg?v=1585966380',
       
    location: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat",
  },
  {
    id: 256,
    url: 'customers/256',
    name: 'Boxy7 T-Shirt with Roll Sleeve',
    avatarSource:
    'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',

    location: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat',
  },
];



export default class ProductListWithSearch extends React.Component {
  state = {
    selectedItems: [],
    queryValue:'',
    sortValue:'',
    typeselected:''
  };
  renderItem(item) {
    const {id, url, name, location,avatarSource} = item;
    const media = <Thumbnail product size="large" name={name} source={avatarSource} />;
  
    return (
      
      <ResourceItem
      
        id={id}
       
        media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
        <Button  onClick={(e) =>{
          e.preventDefault();
          alert(id)}}
 icon={CirclePlusMinor}>Add a product</Button>
      </ResourceItem>
      
    );
  }
  onSelectionChange(items){
    const idsFromResources = items.map((item) => item);       
    this.setState({ selectedItems: idsFromResources });
  }
  onSortChange(selected){
      this.setState({ SortValue: selected });
      console.log(`Sort option changed to ${selected}.`);  
  }
  handleQueryValueChange(value){
    this.setState({queryValue:value})
    console.log('handleQueryValueChange'+value)
  }
  handleQueryValueRemove(value){
    this.setState({queryValue:null})
    console.log('handleQueryValueRemove'+value)
  }
  render() {
    const {
      selectedItems,
      queryValue,
      sortValue,
      typeselected
    }=this.state;
    const options = [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];
    const filters = [
      {
        key: 'taggedWith',
        label: 'Tagged with',
        filter: (
          <Select
          label="Date range"
          options={options}
          onChange={()=>handleSelectChange()}
          value={typeselected}
        />
        ),
        shortcut: true,
      }
    ];
   
    const filterControl = (
      <Filters
        queryValue={queryValue}
        filters={filters}   
        onQueryChange={(value)=>this.handleQueryValueChange(value)}
        onQueryClear={(value)=>this.handleQueryValueRemove(value)}
      >
        <div style={{paddingLeft: '8px'}}>
          <Button onClick={() => console.log('New filter saved')}>Save</Button>
        </div>
      </Filters>
    );
  return (
    <Page>
    <Card>
    
      <ResourceList
        resourceName={{
          singular: 'customer',
          plural: 'customers',
        }}
        items={items}
        renderItem={(item)=>this.renderItem(item)}
        selectedItems={selectedItems}
        onSelectionChange={(items)=>this.onSelectionChange(items)}
        promotedBulkActions={ [
          {
            content: 'Import Products',
            onAction: () => console.log('Todo: implement bulk edit'),
          },
        ]}
       
        sortOptions={[
          {label: 'Newest update', value: 'DATE_MODIFIED_DESC'},
          {label: 'Oldest update', value: 'DATE_MODIFIED_ASC'},
        ]}
        onSortChange={(selected) =>this.onSortChange(selected)}
        filterControl={filterControl}
        
      />
  
    </Card>
    </Page>
  );

 
}

}
