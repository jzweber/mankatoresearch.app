import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Lorem Ipsum Project</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Placeholder <em>Demo</em> Website
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
        </p>
      </section>

      {/* What is the Gauntlet? Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Section One: Main Concept</h2>
          <p className="text-lg mb-6">
            Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <p className="text-lg">
            Here are some key features:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li><strong>Feature One:</strong> Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</li>
            <li><strong>Feature Two:</strong> Sed posuere consectetur est at lobortis. Nulla vitae elit libero.</li>
            <li><strong>Feature Three:</strong> Cras mattis consectetur purus sit amet fermentum.</li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Process</h2>
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

      {/* Interactive Section */}
      <section className="py-16 bg-primary text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Interactive Demo Section</h2>
          <p className="text-lg mb-6">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
          {/* 
            TODO: This is where the interactive component will go.
            This will need to be a client component to handle user interaction and state.
            Example: <InteractiveComponent /> 
          */}
          <div className="mt-8 bg-white/20 p-8 rounded-lg">
            <p className="text-2xl">Interactive Demo Coming Soon!</p>
          </div>
        </div>
      </section>

      {/* Why it Matters Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Why This Matters</h2>
          <p className="text-lg">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;