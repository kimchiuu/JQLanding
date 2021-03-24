import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import Pmetrics from '../gif/Pmetrics'
import ProfPics from '../images/ProfPics';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';
import JanusQL from '../images/JanusQL.png';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            JanusQL
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          A tool for GraphQL API security and performance testing
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Github</Button>
          </p>
        </div>
        <div className="lg:w-1/1.5">
          <img src={JanusQL} alt="JanusQL" width="1000" height="1000"></img>
          {/* <HeroImage /> */}
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Intuitive GUI</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Performance Metrics</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Security Metrics</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Intuitive GUI Playground</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            GUI Playground
          </p>
        </div>
      }
      secondarySlot={<Pmetrics />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Performance Metrics
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Performance Metrics
          </p>
        </div>
      }
      secondarySlot={<Pmetrics />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Security Metrics
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Security Metrics
          </p>
        </div>
      }
      secondarySlot={<Pmetrics />}
    />

    <section id="about" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center bg-primary-aboutbox">
        <Card className="mb-8">
        <h2 className="text-gray-700 text-3xl lg:text-4xl font-semibold">About</h2>
          <p className="text-gray-700 mt-8 text-xl font-light">
          JanusQL is an easy-to-use Electron powered GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time, throughput, andd loadcapacity. It can also test if their GraphQL API is protected against DDOS attacks. Users can keep track of all analytics ran while exploring the API by sending it different kinds of data to see what values are returned. <br></br><br></br>

          Users can keep track of all analytics ran while exploring the API by sending it different kinds of data to see what values are returned. <br></br><br></br>

          Currently in Beta.
          </p>
        </Card>
      </div>
    </section>

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-primary-darker text-3xl lg:text-5xl font-semibold">Our Team</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <ProfPics.Adrian />
            <StatsBox primaryText="Adrian Inza-Cruz" />
            <img src={GitHub} alt="GitHub logo" width="25" height="25"></img> 
            <a href="https://github.com/ainzacruz" className="text-primary-biolinks">Github</a> <br></br>
            <img src={LinkedIn} alt="Linkedin logo" width="25" height="25"></img>
            <a href="https://www.linkedin.com/in/adrian-inza-cruz/" className="text-primary-biolinks">LinkedIn</a>
          </div>
          <div className="w-full sm:w-1/3">
            <ProfPics.Kim />
            <StatsBox primaryText="Kim Chiu" />
            <img src={GitHub} alt="GitHub logo" width="25" height="25"></img> 
            <a href="https://github.com/kimchiuu" className="text-primary-biolinks">Github</a> <br></br>
            <img src={LinkedIn} alt="Linkedin logo" width="25" height="25"></img>
            <a href="https://www.linkedin.com/in/kimchiuu/" className="text-primary-biolinks">LinkedIn</a>
          </div>
          <div className="w-full sm:w-1/3">
            <ProfPics.Lucas />
            <StatsBox primaryText="Lucas Mobley" />
            <img src={GitHub} alt="GitHub logo" width="25" height="25"></img> 
            <a href="https://github.com/lucasmobley" className="text-primary-biolinks">Github</a> <br></br>
            <img src={LinkedIn} alt="Linkedin logo" width="25" height="25"></img>
            <a href="https://www.linkedin.com/in/lucasmobley/" className="text-primary-biolinks">LinkedIn</a>
          </div>
          <div className="w-full sm:w-1/3">
            <ProfPics.Phillip />
            <StatsBox primaryText="Phillip Bannister" />
            <img src={GitHub} alt="GitHub logo" width="25" height="25"></img> 
            <a href="https://github.com/phillipkb" className="text-primary-biolinks">Github</a> <br></br>
            <img src={LinkedIn} alt="Linkedin logo" width="25" height="25"></img> 
            <a href="https://www.linkedin.com/in/phillipkekoabannister/" className="text-primary-biolinks">LinkedIn</a>
          </div>
          <div className="w-full sm:w-1/3">
            <ProfPics.Tammy />
            <StatsBox primaryText="Tammy Le" />
            <img src={GitHub} alt="GitHub logo" width="25" height="25"></img> 
            <a href="https://github.com/letammy979" className="text-primary-biolinks">Github</a> <br></br>
            <img src={LinkedIn} alt="Linkedin logo" width="25" height="25"></img>
            <a href="https://www.linkedin.com/in/letammy/" className="text-primary-biolinks">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-pink-100 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Try JanusQL Today</h3>
      <p className="mt-8 text-xl font-light">
        To get started, fork and clone the app from our github.<br></br>
        
        <br></br>
        Now, let's generate some tests!
      </p>
      <p className="mt-8">
        <Button size="xl">Github</Button>
      </p>
    </section>
  </Layout>
);
