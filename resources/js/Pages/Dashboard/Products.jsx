import DashboardLayout from "@/Layouts/DashboardLayout"

const Products = (props) => {
    console.log('products')
    return (
        <div>Hello products</div>
    )
}
Products.layout = page => <DashboardLayout props={page.props} children={page} title="Products" />

export default Products