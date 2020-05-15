import { Layout, Page, TextStyle,EmptyState} from '@shopify/polaris';
import { TitleBar,ResourcePicker } from '@shopify/app-bridge-react';
const fetch = require('node-fetch');
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Index extends React.Component {
  state = { open: false };
   handleSelection = (resources) => {
    this.setState({ open: false })
     console.log(resources)
     var product={title:resources.selection[0].title,body_html:resources.selection[0].descriptionHtml,tags:'["dsfds","cloth"]',Variants:'dsfdsf',Collection:'fdsfd',product_type:resources.selection[0].productType,vendor:resources.selection[0].vendor};
     console.log(product)
     fetch("https://aladdin-dropshipper-server.herokuapp.com/products/new", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(product)
     })
//body: JSON.stringify({});

// });
 }

  render() {
    const { open }=this.state;
    return (
  <Page>
    <TitleBar
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
    />
    <ResourcePicker
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
    <Layout>   
      <EmptyState
        heading="Sell Your Products on Multiple Stores"
        action={{
          content: 'Select products',
          onAction: () => this.setState({ open: true }),
        }}
        image={img}
      >
        <p>Select products to sale .</p>
      </EmptyState>
      </Layout>
    </Page>
);
}
}

export default Index;