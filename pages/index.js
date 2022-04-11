import Head from 'next/head';
import Image from 'next/image';

const Home = () => {


  return(
    
    <main className="max-w-screen min-h-screen flex justify-center items-center">
      <Head>

        <title>not a masonry grid</title>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="theme-color" content="#fff"/>

      </Head>
      <div className='max-w-6xl gap-6 flex flex-col justify-center 
      items-center lg:items-stretch lg:grid lg:grid-cols-4 lg:rows-auto-rows mx-6 my-10'>
      
        <section className='violet relative w-full p-6 rounded-2xl text-white flex flex-col justify-between shadow-xl 
        col-span-2 col-start-1'>
          <img src="/images/big-quote.svg" alt="quote" className=' w-28 h-28 absolute right-6 sm:right-16 top-0'></img>
          <div className='flex flex-row w-full h-auto items-center gap-2'>
            
            <Image
            src="/images/daniel.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div className='z-10'>
              <h3>Daniel Clifford</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <div className="flex flex-col justify-between z-10">
          <h2 className='text-md font-bold mb-4 '>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined.
            I was honestly feel I get every penny&apos;s worth
          </h2>
          <p className=' translucent-white'>&quot;I was an EMT for many years before I joined the bootcamp. I&apos;ve been looking to make a transition and have heard some people who had an amazing experience here. 
            I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 
            weeks was the best &ndash; and the most gruelling &ndash; time of my life. Since completing the course, I&apos;ve successfully
            switched careers, working as a Software Engineer at a VR startup&quot;</p>
          </div>
        </section>

        <section className='bg-gray-blue w-full h-auto p-6 rounded-2xl text-white flex flex-col justify-between shadow-xl
        col-span-1 col-start-3'>
          <div className='flex flex-row w-full  mb-4 h-auto w-full items-center gap-2'>
            <Image
            src="/images/jonathan.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div className=''>
              <h3>Jonathan Walters</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <div className="flex flex-col justify-between">
          <h2 className='text-md font-bold mb-4 lg:mb-10'>
            The team was very supportive and kept me motivated
          </h2>
          <p className='mt-1 translucent-white'>&quot;I started as a total newbie with virtuall no coding skills. 
          I now work as a mobile engineer for a big company. This was one of the best investments I&apos;ve made in myself&quot;</p>
          </div>
        </section>

        <section className=' hidden lg:block col-start-4 row-span-2 content-end bg-white w-full p-6 rounded-2xl text-gray-blue flex flex-col justify-between shadow-2xl'>
          <div className='flex flex-row w-full mb-4 h-auto items-center gap-2'>
            <Image
            src="/images/kira.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div>
              <h3>Kira Whittle</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <div className="flex flex-col justify-between">
          <h2 className='text-md font-bold  mb-4'>
           Such a life&ndash;changing experience. Highly recommended&#33;
          </h2>
          <p className='mt-1 translucent-gray'>&quot;Before joining the bootcamp, I&apos;ve never written a line of code.
          I needed some structure from professionals who can help me learn programming step by step.
          I was encouraged to enroll by a former student of theirs who can only say wonderful things about the programs.
          The entire curriculum and staff did not disappoint. They wer very hands&dash;on and I never had to wait long for assistance.
          The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.
          In fact, I've often referred to it during interviews as an example of my development experience. it certainly helped me land a job as a
          full&ndash;stack developer after receiving multiple offers. 100&#37; recommend&#33; &quot;</p>
          </div>

        </section>


        <section className=' col-start-1 col-span-1 bg-white text-gray-blue w-full h-auto p-6 rounded-2xl  flex flex-col justify-between shadow-2xl'>
          <div className='flex flex-row w-full mb-4 h-auto items-center gap-2'>
            <Image
            src="/images/jeanette.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div>
              <h3>Jeanette Harmon</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <h2 className='text-md font-bold mb-6'>
            An overall wonderful and rewarding experience
          </h2>
          <p className='mt-1 translucent-gray'>&quot;Thank you for the wonderful experience!
          I now have a job I really enjoy, and make a agood living while doing something I love. &quot;</p>

        </section>

        <section className='col-start-2 col-span-2 bg-dark-gray-blue w-full  h-auto p-6 rounded-2xl text-white flex flex-col justify-between shadow-xl'>
          <div className='flex flex-row w-full mb-4 h-auto items-center gap-2'>
            <Image
            src="/images/patrick.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div>
              <h3>Patrick Abrams</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <div className="flex flex-col justify-between">
          <h2 className='text-md font-bold mb-3 lg:mb-1'>
          Awesome teaching support from TAs who did the bootcamp themselves. 
          Getting guidance from them and learning from their experiences was easy.
          </h2>
          <p className='mt-1 translucent-white'>&quot;The staff seen genuinely concerned about my progress which I find really refreshing.
          The program gave me the confidence necessary to be able to go out in the world an dpresent myself as a capable
          junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.&quot;</p>
          </div>
        </section>

        <section className=' block lg:hidden col-start-4 row-span-2 content-end bg-white w-full p-6 rounded-2xl text-gray-blue flex flex-col justify-between shadow-2xl'>
          <div className='flex flex-row w-full mb-4 h-auto items-center gap-2'>
            <Image
            src="/images/kira.jpg"
            width={40}
            height={40}
            alt="daniel"
            className='rounded-full'
          />

            <div>
              <h3>Kira Whittle</h3>
              <p className='translucent-white'>Verified Graduate</p>

            </div>

          </div>

          <div className="flex flex-col justify-between">
          <h2 className='text-md font-bold  mb-4'>
           Such a life&ndash;changing experience. Highly recommended&#33;
          </h2>
          <p className='mt-1 translucent-gray'>&quot;Before joining the bootcamp, I&apos;ve never written a line of code.
          I needed some structure from professionals who can help me learn programming step by step.
          I was encouraged to enroll by a former student of theirs who can only say wonderful things about the programs.
          The entire curriculum and staff did not disappoint. They wer very hands&dash;on and I never had to wait long for assistance.
          The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.
          In fact, I&apos;ve often referred to it during interviews as an example of my development experience. it certainly helped me land a job as a
          full&ndash;stack developer after receiving multiple offers. 100&#37; recommend&#33; &quot;</p>
          </div>

        </section>

    
        
      </div>

    </main>

  )


}

export default Home
