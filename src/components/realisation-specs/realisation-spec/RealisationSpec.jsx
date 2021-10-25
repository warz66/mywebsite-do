import './RealisationSpec.css';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationSpec = ({spec}) => {

    return(
        <div className="realisation-spec">
            <div className="realisation-spec-text">
                <h4>{spec.title}</h4>
                {spec.sections.map((section, index) => {
                    return (
                        <div key={index}>
                            {section.title && <h5>{section.title}</h5>}
                            {section.paragraphe && section.paragraphe.map( (paragraphe, index) => {
                                return <p key={index} dangerouslySetInnerHTML={{ __html: paragraphe }}></p>
                            })}
                        </div>
                    );
                })}
            </div>
            <div className="realisation-spec-img">
                <div className="realisation-spec-links">
                    {spec.linksGithubs && <span className="realisation-spec-links-git">
                        {spec.linksGithubs.map((link, index) => {
                            return (
                                <a key={index} href={link.href} target="_blank" title={link.title} rel="noreferrer">{index+1}</a>
                            )
                        })}
                    </span>}
                    {spec.linksGithubs && spec.linkWebsite && <span className="realisation-spec-links-slash">/</span>}
                    {spec.linkWebsite && <a href={spec.linkWebsite.href} target="_blank" rel="noreferrer">{spec.linkWebsite.title}</a>}
                </div>
                <ImageRealisation image={spec.image} comeFromSpecs={true}/>
            </div>
        </div>
    );

}

export default RealisationSpec;