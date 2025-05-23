import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import CustomerEnquiryProduct from "components/layouts/CustomerEnquiryProduct";
import CustomerComplaintForm from "components/layouts/CustomerComplaintForm";



export default function Page() {

	return (
		<>
			<Head>
				<title>{`Customer Complaint Form - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Customer Complaint Form" breadcrumbs={[
				{ name: 'Customers', link: '#' },
				{ name: 'Customer Complaint Form', link: '' },
			]} />
           
            <SidebarContent navFor="Customers">
                
            <CustomerComplaintForm></CustomerComplaintForm>            
            </SidebarContent>
           
			<Footer />
		</>
	);
  
      
      
    
}

