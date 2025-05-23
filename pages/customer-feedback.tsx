import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import CustomerFeedback from "components/layouts/CustomerFeedback";



export default function Page() {

	return (
		<>
			<Head>
				<title>{`Customer Feedback - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Customer Feedback" breadcrumbs={[
				{ name: 'Customers', link: '#' },
				{ name: 'Customer Feedback', link: '' },
			]} />
           
			<SidebarContent navFor="Customers">
			<h2>Customer Feedback</h2>
            <div className="blue-line mt-2 mb-4"></div>
			
                <p><strong>Dear Esteemed Customer,</strong></p>
                <p>In our dedication to become an even better supplier, we kindly ask you to complete this questionnaire, where we ask for feedback on how your company look’s upon us as a supplier. We would therefore highly appreciate if you could spend a few minutes to answer the questions in the table below and return this form to us by Email at (vk_jodhani@balasorealloys.com) or Fax at (+91 033 – 22295693). This will help us to take necessary actions for improving our products/ services.</p>

            <CustomerFeedback></CustomerFeedback>
			
			
			</SidebarContent>
           
			<Footer />
		</>
	);
  
      
      
    
}

