import React from 'react';
import DashboardTabs from '../components/Tabs/DashboardTabs';
import Chatbot from '../components/Chatbot/Chatbot';
import {auth} from "@/auth";
import DashboardScroll from '../components/DashboardScroll/DashboardScroll';

const HomePage = async () => {
  const session = await auth();
  return (
    <div className="container mx-auto px-4 py-8">
      
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to the SLM Demo</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Prompt Injection through <em>SLM</em> Integration
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          The goal of this project is to enhance the defense capabilities of small language models against prompt injection attacks with jailbreaking techniques. Prompt injection attacks involve malicious prompts to cause unintended consequences on the output a user receives. Existing literature splits prompt injection into two distinct types – direct and indirect prompt injections. 
          Direct prompt injections occur when an attacker directly includes malicious instructions in the input prompt, while indirect prompt injections involve manipulating the context or environment in which the model operates to influence its behavior.
        </p>
      </section>

      <section className="py-8 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Designing the SLM</h2>
          <p className="text-lg mb-6">
            The small language model (SLM) is designed to be robust against various prompt injection attacks. It was finetuned on a dataset specifically for general chatbot 
            interactions - the 15k dataset from Hugging Face
          </p>
          <p className="text-lg">
            Here are some key features:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li><strong>Feature One:</strong> Fine-tuned with LoRA on a diverse dataset for chatbot interactions</li>
            <li><strong>Feature Two:</strong> Corpus contains a wide range of statistical data from Wikipedia</li>
            <li><strong>Feature Three:</strong> Connected to database for testing security vulnerabilities</li>
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Testing for Prompt Injection</h2>
          <p className="text-lg mb-6">
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <div className="text-center">
            <p className="text-2xl font-semibold">Step One ➡️ Step Two ➡️ Step Three</p>
          </div>
          <p className="text-lg mt-6">
            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper <strong>nulla non metus</strong> auctor fringilla.
          </p>
        </div>
      </section>

      <section className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Why This Matters</h2>
          <p className="text-lg">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>
      </section>

      <section className="py-8 bg-primary text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Interactive Demo</h2>
          <p className="text-lg mb-6">
            To begin interacting with the SLM and testing its defenses against prompt injection attacks, please login to access the dashboard.
          </p>
        </div>
      </section>

      {session && session.user ? (
      <div id="dashboard" className="container">
        <div className="w-full bg-secondary my-32 p-0.5"></div>
        <DashboardScroll />
        <h2 className=" font-bold mb-6">Dashboard</h2>
        <DashboardTabs>
          <Chatbot />
        </DashboardTabs>
      </div>
      ) : null}
      
    </div>
    
    
  );
};

export default HomePage;