/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
  return (
    <>
      <Head>
        <title>{`History & Milestones - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="History & Milestones"
        breadcrumbs={[
          { name: "About", link: "#" },
          { name: "History & Milestones", link: "" },
        ]}
      />
      <SidebarContent navFor="About Us">
        <h2>Our Success Memories</h2>
        <div className="blue-line mt-2 mb-4"></div>
        <Zoom>
        <img src="/images/export-award.jpg" className="w-100 mb-4" alt="" />
        </Zoom>
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr className="bg-primary text-white">
                <td colSpan={2}>
                  <p>
                    <strong>Award / Reward</strong>
                    <strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Scope</strong>
                    <strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Organized By</strong>
                    <strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Year</strong>
                    <strong> </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Corporate Excellence Silver Award</p>
                </td>
                <td>
                  <p>Recived by MD</p>
                  <p>Mr. Anil Sureka</p>
                </td>
                <td>Govt Of Odisha&nbsp;</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>
                  <p>2</p>
                </td>
                <td>
                  <p>Greentech CSR Award 2018</p>
                </td>
                <td>For the 2018</td>
                <td>Govt Odisha</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>
                  <p>3</p>
                </td>
                <td>
                  <p>EEPC INDIA EXPORT</p>
                  <p>AWARDS</p>
                </td>
                <td>For the Year 2018</td>
                <td>EEPC</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>
                  <p>4</p>
                </td>
                <td>
                  <p>Brand of Decade Award</p>
                  <p>BARAC ASIA</p>
                </td>
                <td>For the Year 2018</td>
                <td>BARAC</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>
                  <p>5</p>
                </td>
                <td>
                  <p>NALCO Best&nbsp; Meritorious Quality&nbsp; Circle Award</p>
                </td>
                <td>For the Year 2017</td>
                <td>NALCO</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>
                <p>6</p>
                </td>
                <td>
                  <p>BNALCO 2nd</p>
                  <p>Runner up Quality&nbsp; Circle Award</p>
                  <p>&nbsp;</p>
                </td>
                <td>For the year 2016</td>
                <td>NALCO</td>
                <td>2016</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <p>JM International&nbsp; award – Face of the&nbsp; People</p>
                </td>
                <td>Fothe Year 2015-16</td>
                <td>JM International</td>
                <td>2015</td>
              </tr>
              <tr>
                <td>
                  <p>8</p>
                </td>
                <td>
                  <p>
                    Balasore Alloys Ltd. awarded as “Best Tax Payer” in Balasore
                    District.<strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    For the Financial Year 2008-2009 &amp; 2009-2010
                    <strong> </strong>
                  </p>
                </td>
                <td>
                  <p>Income Tax Department</p>
                </td>
                <td>
                  <p>2010</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>9</p>
                </td>
                <td>
                  <p>
                    Frame CSR Award (Best Education Support) by Governor
                    <strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    Corporate Responsibility Forum<strong> </strong>
                  </p>
                </td>
                <td>
                  <p>The Times of India Group</p>
                </td>
                <td>
                  <p>2010</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>
                    Grow Green Award<strong> </strong>
                  </p>
                </td>
                <td>
                  <p>
                    Sr. Vice President (P&amp;A) receiving award from Hon’ble
                    Chief Minister of Orissa<strong> </strong>
                  </p>
                </td>
                <td>
                  <p>On World Environment Day by Times of India</p>
                </td>
                <td>
                  <p>2010</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>11</p>
                </td>
                <td>
                  <p>
                    Contribution Award (BSNL)<strong> </strong>
                  </p>
                </td>
                <td>
                  <p>By Shri Shrikanta Jena</p>
                </td>
                <td>
                  <p>By National Union of BSNL (Workers)</p>
                </td>
                <td>
                  <p>2010</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>15th&nbsp;State Level Quality Convention Award</p>
                </td>
                <td>
                  <p>Balasore Alloys winning Runners-up the Silver Plaque</p>
                </td>
                <td>
                  <p>
                    NALCO (National Aluminum Company Limited) QC Convention
                    Award
                  </p>
                </td>
                <td>
                  <p>2010</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>13</p>
                </td>
                <td>
                  <p>
                    An International B2B Engineering &amp; Manufacturing
                    Exhibition &amp; Conference
                  </p>
                </td>
                <td>
                  <p>Biz Bridge, Engineering &amp; Manufacturing Expo</p>
                </td>
                <td>
                  <p>Organized by CII</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>14</p>
                </td>
                <td>
                  <p>RAJIV GANDHI NATIONAL QUALITY AWARD</p>
                </td>
                <td>
                  <p>Metallurgical category of large scale organization</p>
                </td>
                <td>&nbsp;</td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>15</p>
                </td>
                <td>
                  <p>Think Orissa Leadership Award</p>
                </td>
                <td>
                  <p>Corporate Social Responsibility</p>
                </td>
                <td>
                  <p>The Times of India Group</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>16</p>
                </td>
                <td>
                  <p>NALCO QC Convention Award(Best performance)</p>
                </td>
                <td>
                  <p>TPM Circle</p>
                </td>
                <td>
                  <p>NALCO (National Aluminium Company Limited )</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>17</p>
                </td>
                <td>
                  <p>NALCO QC Convention Award(Runners Up)</p>
                </td>
                <td>
                  <p>TPM Circle</p>
                </td>
                <td>
                  <p>NALCO (National Aluminium Company Limited )</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>18</p>
                </td>
                <td>
                  <p>EEPC Award</p>
                </td>
                <td>
                  <p>
                    Gold Trophy for Being Top Exporter of Ferro Alloys from
                    Eastern region
                  </p>
                </td>
                <td>
                  <p>
                    EEPC&nbsp; (Engineering. Export Promotion Council)&nbsp;
                    India Eastern Region
                  </p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>19</p>
                </td>
                <td>
                  <p>Special Achivement Award</p>
                </td>
                <td>
                  <p>Out standing Social Service &amp; Achivemet</p>
                </td>
                <td>
                  <p>Rotary Club of Balasore</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>20</p>
                </td>
                <td>
                  <p>Award for Excellence in Consistent TPM Commitment Award</p>
                </td>
                <td>
                  <p>Improvement in plant maintenance technology</p>
                </td>
                <td>
                  <p>
                    JIPM (Japan Institute of Plant Maintenance) at Kyoto, Japan
                  </p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>21</p>
                </td>
                <td>
                  <p>
                    First Position in CII Eastern Region Productivity Award -
                    Category "A"
                  </p>
                </td>
                <td>
                  <p>Sustained level of high Over all Productivity</p>
                </td>
                <td>
                  <p>Confederation of Indian Industry, Kolkatta</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>22</p>
                </td>
                <td>
                  <p>Samaj Bandhu Sanmman</p>
                </td>
                <td>
                  <p>Out standing Social Service</p>
                </td>
                <td>
                  <p>Oriya Daily -The Samaj</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>23</p>
                </td>
                <td>
                  <p>IT Award-2009</p>
                </td>
                <td>
                  <p>Initiatives of Industries</p>
                </td>
                <td>
                  <p>CII, Orissa</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>24</p>
                </td>
                <td>
                  <p>Best Display Stall</p>
                </td>
                <td>
                  <p>National level Industrial Exhibition- Expo-Orissa-2009</p>
                </td>
                <td>
                  <p>MSME,Govt of India</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>25</p>
                </td>
                <td>
                  <p>Balasore Ratna</p>
                </td>
                <td>
                  <p>Social services</p>
                </td>
                <td>
                  <p>Dr Rabindra Mohan Das Trust</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>26</p>
                </td>
                <td>
                  <p>Anudhyan Sanmman</p>
                </td>
                <td>
                  <p>Social services</p>
                </td>
                <td>
                  <p>Weekly News Paper-Anudhyana</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>27</p>
                </td>
                <td>
                  <p>Sambhardhana Patra</p>
                </td>
                <td>
                  <p>Out standing Social Service for North Balasore</p>
                </td>
                <td>
                  <p>Subarnarekha Youth Parishad</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>28</p>
                </td>
                <td>
                  <p>
                    Special achievement award in institutional garden category
                    in District Annual Flower Show-2009
                  </p>
                </td>
                <td>
                  <p>Greenery development</p>
                </td>
                <td>
                  <p>Rotary Club of Balasore</p>
                </td>
                <td>
                  <p>2009</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>29</p>
                </td>
                <td>
                  <p>National Achievement Award&nbsp; &amp; Gold Medal</p>
                </td>
                <td>
                  <p>Quality Excellence</p>
                </td>
                <td>
                  <p>
                    India International Council for Industries &amp; Trade, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>30</p>
                </td>
                <td>
                  <p>
                    Award of Excellence for Highest Relief Distribution during
                    Flood in Balasore District
                  </p>
                </td>
                <td>
                  <p>&nbsp;Social Services</p>
                </td>
                <td>
                  <p>
                    All India Small &amp; Medium Newspaper Federation,
                    Bhubaneswar.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>31</p>
                </td>
                <td>
                  <p>Mother India Award for Udyog Pratibha 2007 with Medal</p>
                </td>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>
                    Indian Organization for Commerce and Industry, New Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>32</p>
                </td>
                <td>
                  <p>International Kohinoor Award with Medal</p>
                </td>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>
                    Global Society for Health &amp; Educational Growth, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>33</p>
                </td>
                <td>
                  <p>
                    National Excellence Award for Business and Management 2007
                    with Medal
                  </p>
                </td>
                <td>
                  <p>Business Leadership&nbsp;</p>
                </td>
                <td>
                  <p>
                    Intellectual Peoples and Economic Growth Association, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>34</p>
                </td>
                <td>
                  <p>Life Time Achiever Award with Medal</p>
                </td>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>
                    Nations Economic for Health and Educational Growth, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>35</p>
                </td>
                <td>
                  <p>
                    National Business Leadership Award 2008 &amp; Gold Medal
                  </p>
                </td>
                <td>
                  <p>Business Development</p>
                </td>
                <td>
                  <p>
                    Indian Society for Industry &amp; Intellectual Development,
                    New Delhi.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>36</p>
                </td>
                <td>
                  <p>Rashtriya Ratan Award</p>
                </td>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>Citizens Integration Peace Society, New Delhi.</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>37</p>
                </td>
                <td>
                  <p>Bhartiya Vikas Ratan Award</p>
                </td>
                <td>
                  <p>Excellency</p>
                </td>
                <td>
                  <p>All India Business Development Association, New Delhi.</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>38</p>
                </td>
                <td>
                  <p>Rashtra Rattan Award with Medal</p>
                </td>
                <td>
                  <p>Excellency</p>
                </td>
                <td>
                  <p>All India Business Development Association, New Delhi.</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>39</p>
                </td>
                <td>
                  <p>“IMEA Super Platinum Award – 1st&nbsp;Runners-up”</p>
                </td>
                <td>
                  <p>
                    “Metal Category” in India Manufacturing Excellence Award by
                    Frost &amp; Sullivan
                  </p>
                </td>
                <td>
                  <p>
                    Frost &amp; Sullivan,at Hotel Leela Palace in Bangalore.
                  </p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>40</p>
                </td>
                <td>
                  <p>
                    Commendation for Strong Commitment to Excel in CII EXIM BANK
                    Award&nbsp;
                  </p>
                </td>
                <td>
                  <p>Business Excellence</p>
                </td>
                <td>
                  <p>Confederation of Indian Industry</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>41</p>
                </td>
                <td>
                  <p>
                    Bharat Gaurav Puraskar /&nbsp; International Business
                    Excellence Award
                  </p>
                </td>
                <td>
                  <p>International Business Excellence</p>
                </td>
                <td>
                  <p>Institute of Economic Studies,Thailand</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>42</p>
                </td>
                <td>
                  <p>NALCO QC Convention Award</p>
                </td>
                <td>
                  <p>Best effectiveness &amp; results for TPM Circle</p>
                </td>
                <td>
                  <p>NALCO (National Aluminium Company Limited )</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>43</p>
                </td>
                <td>
                  <p>First Position in CII Eastern Region Productivity Award</p>
                </td>
                <td>
                  <p>
                    “Sustained High Overall Improvement in Productivity”&nbsp;
                  </p>
                </td>
                <td>
                  <p>Confederation of Indian Industry,Kolkatta</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>44</p>
                </td>
                <td>
                  <p>Accredited ISO 14001:2004</p>
                </td>
                <td>
                  <p>Environment</p>
                </td>
                <td>
                  <p>BIS (Bureau of Indian Standards)</p>
                </td>
                <td>
                  <p>2008</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>45</p>
                </td>
                <td>
                  <p>Indian Achievers Award for Industrial Leadership</p>
                </td>
                <td>
                  <p>&nbsp;Industrial Leadership</p>
                </td>
                <td>
                  <p>
                    Indian Economic Development and Research Association, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>46</p>
                </td>
                <td>
                  <p>‘Udyog Rattan Award’ and ‘Excellence Award’</p>
                </td>
                <td>
                  <p>
                    Productivity, Quality, Innovation &amp; Management by IES
                  </p>
                </td>
                <td>
                  <p>Institute of Economic Studies, New Delhi.</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>47</p>
                </td>
                <td>
                  <p>
                    National Status Award for Business Leadership 2006 with
                    Medal
                  </p>
                </td>
                <td>
                  <p>Business Leadership</p>
                </td>
                <td>
                  <p>
                    Intellectual Peoples and Economic Growth Association, New
                    Delhi.
                  </p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>48</p>
                </td>
                <td>
                  <p>Bharatiya Vikas Ratan Award with Medal</p>
                </td>
                <td>
                  <p>Health and Education Growth</p>
                </td>
                <td>
                  <p>Global Society for Health &amp; Educational Growth</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>49</p>
                </td>
                <td>
                  <p>Rastriya Nirman Gold Award</p>
                </td>
                <td>
                  <p>Recognition from (ISIID)</p>
                </td>
                <td>
                  <p>
                    Indian Society For Industry &amp; Intellectual Development
                  </p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>50</p>
                </td>
                <td>
                  <p>Excellence Award</p>
                </td>
                <td>
                  <p>
                    Productivity, Quality, Innovation &amp; Management by IES
                  </p>
                </td>
                <td>
                  <p>
                    &nbsp;Institute of Economic Studies) at Habitat Centre
                    ,New-Delhi
                  </p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>51</p>
                </td>
                <td>
                  <p>Enertia Award</p>
                </td>
                <td>
                  <p>
                    &nbsp;For sustainable Energy &amp; Power / Energy Efficiency
                    in "Alloys"
                  </p>
                </td>
                <td>
                  <p>
                    NDTV Profit, the media partner of Enertia Award at the
                    Y.B.Chavan Auditorium,Mumbai
                  </p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>52</p>
                </td>
                <td>
                  <p>“IMEA Platinum Award – 1st&nbsp;Runners-up”</p>
                </td>
                <td>
                  <p>
                    “Metal Category” in India Manufacturing Excellence Award by
                    Frost &amp; Sullivan
                  </p>
                </td>
                <td>
                  <p>Frost &amp; Sullivan, at Hyatt Regency, Mumbai</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>53</p>
                </td>
                <td>
                  <p>Life time achievement award</p>
                </td>
                <td>
                  <p>
                    National Leadership In recognition of sterling Merit,
                    Excellent Performance and outstanding contribution for the
                    progress of nation by Indian Organisation For Commerce &amp;
                    Industry (IOCI)
                  </p>
                </td>
                <td>
                  <p>Indian Organization for Commerce &amp; Industry</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>54</p>
                </td>
                <td>
                  <p>First Position in CII ER Award</p>
                </td>
                <td>
                  <p>Significant Improvement in Productivity</p>
                </td>
                <td>
                  <p>Confederation of Indian Industry,Kolkatta</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>55</p>
                </td>
                <td>
                  <p>CII ER - Certificate</p>
                </td>
                <td>
                  <p>
                    Certificate for the commendable effort in the area of Total
                    Quality
                  </p>
                </td>
                <td>
                  <p>Confederation of Indian Industry,Kolkatta</p>
                </td>
                <td>
                  <p>2007</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>56</p>
                </td>
                <td>
                  <p>
                    HCCI Certificate&nbsp; ( Hoogly&nbsp; Chamber of Commerce
                    &amp; Industry )
                  </p>
                </td>
                <td>
                  <p>
                    Certificate for the BEST IR (Industrial Relation)
                    Practices&nbsp;
                  </p>
                </td>
                <td>
                  <p>
                    HCCI ( Hoogly&nbsp; Chamber of Commerce &amp; Industry )
                    ,Kolkatta
                  </p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>57</p>
                </td>
                <td>
                  <p>“IMEA Gold Award”</p>
                </td>
                <td>
                  <p>
                    “Metal Category” in India Manufacturing Excellence Award by
                    Frost &amp; Sullivan
                  </p>
                </td>
                <td>
                  <p>Frost &amp; Sullivan,&nbsp; Mumbai</p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>58</p>
                </td>
                <td>
                  <p>Rashtriya Samman Purskar Award</p>
                </td>
                <td>
                  <p>Individual Achievement &amp; Intellectual Excellence</p>
                </td>
                <td>
                  <p>
                    India International Council for Industries &amp; Trade , New
                    Delhi
                  </p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>59</p>
                </td>
                <td>
                  <p>International Award</p>
                </td>
                <td>
                  <p>
                    “Leader in Prestige and Quality” - Europe&nbsp; In
                    recognition of its Management Performance
                  </p>
                </td>
                <td>
                  <p>Actualidad Publishing House, Madrid-Spain</p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>60</p>
                </td>
                <td>
                  <p>TPM Excellence Award</p>
                </td>
                <td>
                  <p>Improvement in plantmaintenance technology</p>
                </td>
                <td>
                  <p>
                    JIPM (Japan Institute of Plant Maintenance) at
                    Yokahama,Japan
                  </p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>61</p>
                </td>
                <td>
                  <p>National Industrial Excellence Award</p>
                </td>
                <td>
                  <p>
                    Outstanding &nbsp;achievements &amp; contribution made by
                    the company in the field of Industrial development &amp;
                    Social services
                  </p>
                </td>
                <td>
                  <p>Indian Economic Development &amp; Research Association</p>
                </td>
                <td>
                  <p>2006</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>62</p>
                </td>
                <td>
                  <p>NPC(National Productivity Council) Award</p>
                </td>
                <td>
                  <p>Best Innovative Project Award&nbsp;</p>
                </td>
                <td>
                  <p>National Productivity Council</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>63</p>
                </td>
                <td>
                  <p>Rashtriya Udhyog Gold Award</p>
                </td>
                <td>
                  <p>Industrial Development</p>
                </td>
                <td>
                  <p>
                    Indian Society for Industry &amp; Intellectual Development,
                    New Delhi
                  </p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>64</p>
                </td>
                <td>
                  <p>“IMEA Silver Award”</p>
                </td>
                <td>
                  <p>
                    &nbsp;“Metal Category” in India Manufacturing Excellence
                    Award by Frost &amp; Sullivan
                  </p>
                </td>
                <td>
                  <p>Frost &amp; Sullivan, Mumbai</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>65</p>
                </td>
                <td>
                  <p>State Level Excellence award</p>
                </td>
                <td>
                  <p>
                    Quality, Rapid Growth of Productivity and Business
                    Innovation, Management and Hi tech performance for TURNING
                    AROUND THE COMPANY
                  </p>
                </td>
                <td>
                  <p>
                    National Convention of All India Small &amp; Medium
                    Newspapers Federation [Orissa Unit] at Jaydev Bihar(Soochana
                    Bhavan) , BBSR
                  </p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>66</p>
                </td>
                <td>
                  <p>Gem of India Award</p>
                </td>
                <td>
                  <p>Outstanding service to society</p>
                </td>
                <td>
                  <p>All India Achiever's Conference, New Delhi</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>67</p>
                </td>
                <td>
                  <p>Arch of Excellence (Business) Award</p>
                </td>
                <td>
                  <p>
                    Outstanding service to society and excellence in his field
                    of activity
                  </p>
                </td>
                <td>
                  <p>All India Achiever's Conference, New Delhi</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>68</p>
                </td>
                <td>
                  <p>Dhwani Pratidhwani Sanman</p>
                </td>
                <td>
                  <p>Industrial Development &amp; Social Services</p>
                </td>
                <td>
                  <p>Dhwani Pratidhwani News Paper</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>69</p>
                </td>
                <td>
                  <p>Rashitriya Ekta Sanman</p>
                </td>
                <td>
                  <p>
                    Outstanding Services &amp; contribution in the field of
                    Industrial Development&nbsp; &amp; social services in the
                    states
                  </p>
                </td>
                <td>
                  <p>National Unity Conference, New Delhi</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>70</p>
                </td>
                <td>
                  <p>Sambhardhana Patra</p>
                </td>
                <td>
                  <p>
                    Excellence in Engineering, Industrial Development&nbsp;
                    and&nbsp; Social Service
                  </p>
                </td>
                <td>
                  <p>The Ajikali, Daily Oriya News Paper</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>71</p>
                </td>
                <td>
                  <p>OUWJ Award</p>
                </td>
                <td>
                  <p>Excellence in Engineering and Social Service</p>
                </td>
                <td>
                  <p>All India News Paper Employees Federation, New Delhi</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>72</p>
                </td>
                <td>
                  <p>Balasore Sanman Award</p>
                </td>
                <td>
                  <p>Excellence in Industrial Development in the District</p>
                </td>
                <td>
                  <p>Balasore Bikash Mahostav, Balasore</p>
                </td>
                <td>
                  <p>2005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>73</p>
                </td>
                <td>
                  <p>Utkal Sanman Award</p>
                </td>
                <td>
                  <p>Industrial Development &amp; Social Services</p>
                </td>
                <td>
                  <p>Utkam Mail</p>
                </td>
                <td>
                  <p>2004</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>74</p>
                </td>
                <td>
                  <p>Manapatra Award</p>
                </td>
                <td>
                  <p>
                    Development of Social &amp; Welfare activities in
                    Educational Institutes
                  </p>
                </td>
                <td>
                  <p>Saraswati Shishu&nbsp; Mandir, Remuna, Balasore</p>
                </td>
                <td>
                  <p>2004</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>75</p>
                </td>
                <td>
                  <p>Rajiv Gandhi Sadbhawana Award</p>
                </td>
                <td>
                  <p>Best Engineer of the year</p>
                </td>
                <td>
                  <p>Rajiv Gandhi Forum, Orissa</p>
                </td>
                <td>
                  <p>2004</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
