export const Team = (props) => {
  return (
    <div id='team'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-8 col-md-offset-2 section-title text-center'>
            <h2>Meet the Team</h2>
            <p>We are close companions to the project</p>
          </div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 team'>
                  <div className='thumbnail'>
                    <img src={d.img} alt='...' className='team-img img-responsive' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
