export default function MapSection() {
    return (
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-2xl text-black text-center mb-4 mt-16">
          Find Us On Google Map
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] w-full mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.772901087454!2d104.88!3d11.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzAwLjAiTiAxMDTCsDUyJzQ4LjAiRQ!5e0!3m2!1sen!2s!4v1639580759201!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border-0"
              title="Google Map Location"
            ></iframe>
          </div>
          
          <div className="flex justify-center items-center gap-2 text-lg text-black">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>St.123 Sen Sok, Phnom Penh, Cambodia</span>
          </div>
        </div>
      </div>
    )
  }
  
  