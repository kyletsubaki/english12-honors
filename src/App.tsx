import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function App() { 
    return (
        <main>
            <div className="nameplate-container">
                <div className="nameplate">My son Bread, Kevin Pinecone, Kylie Soup-Pocky, Joshua Food<br/>CEOs of Xom.inc</div>
            </div>
            <Bookshelf>
                <Book coverImage="internment.jpg" title="War Relocation Authority" color='#235b99' position={[40, 0, -15]}>
                    <p>
                        During the second world war, the US government evicted over 120,000 Japanese Americans from the
                        Pacific region. These people were sent to one of the ten camps, and were forced to live under
                        the watch of guards and surrounded by barbed wire. Sometimes these people were forced into horse
                        stalls and had to sleep on hay. As put by Yukiko Kimura, “This lake was the outstanding
                        improvement that the Japanese here have made here at Tanforan. When we first arrived the side of
                        the lake was only an unattractive, dried-up hole in the ground. The men built up its sides,
                        planted trees, made a picturesque arbor, and as the crowning achievement, built a marvelous
                        bridge… out of logs in &rsquo;neither American nor Japanese but in typical Tanforan style.&lsquo; It was
                        then filled with water, and the end result was a transformation which seemed to be little short
                        of a miracle.”
                    </p>
                </Book>
                <Book coverImage="richardAoki.webp" title="Richard Aoki" color='#63252a' position={[0, 10, 0]}>
                    <p>
                        Richard Aoki was a Japanese-American Activist that was a part of a group called the Black
                        Panther Party. He provided this group with guns and the group was considered a “threat to
                        internal security”. The group&rsquo;s goal was the end of police brutality and murder of black people.
                        They wanted to police the police, since they were made up of mostly white men. He was able to
                        sue the FBI five times to get 300,000 pages of heavily redacted documents. He was accused of
                        being an FBI informant, yet people don&rsquo;t know if it really is true.
                    </p>
                </Book>
                <Book coverImage="dbm2013.png" title="Delano Grape Strike" color='#235b99' position={[0, 10, 0]}>
                    <p>
                        In 1965, Filipino farmworkers in Delano, California went on strike, demanding a raise in hourly
                        wages and piece rates. The strike was led by Larry Itliong and Ben Gines of the Agricultural
                        Workers Organizing Committee (AWOC). The National Farm Workers Association (NFWA), led by Cesar
                        Chavez, also joined the strike after a vote. Even after being threatened and attacked, the
                        farmworkers continued in their strike, and the NFWA did a consumer boycott campaign which
                        pressured growers into recognizing the NFWA as a union. This union advocated for actual wages,
                        medical care, and places to live. Before the union gained power some workers had people living
                        without electricity, running water, or toilets, and often lived in their own cars. This struggle
                        for farmworker rights ultimately became part of a larger movement for civil rights and social
                        justice. It was a joint effort between both Hispanic Americans and Filipino Americans that
                        ultimately impacted the entirety of the agricultural economy in favor of the workers. 
                    </p>
                </Book>
                <Book coverImage="withey2018.png" title="Gene Allen" color='#63252a' position={[-20, 40, 10]}>
                    <p>
                    Gene Allen was a Filipino person who grew up extremely poor in Philadelphia. He experienced the 
                    hardships of being an Asian American. As he grew up he became interested in politics and even made 
                    a committee for the Philippines in America. This committee later gained a position in the government 
                    against the dictatorship of Marcos. This dictatorship kept the Philippines in a form of disarray 
                    and corruption. Gene Allen’s committee hoped to bring light to this situation. After that, he 
                    traveled to Hawaii to participate in an international convention in which he spread information 
                    about the Filipino dictatorship and learned about the Filipino workers conditions. After hearing 
                    about the conditions he and another FIlipino, Slime Domingo, attempted a coup in Hawaii for Filipino 
                    workers while also creating the Katipunan ng mga Demokratikong Pilipino group. This group sought to 
                    also defend Filipino workers rights. However, they were shot and killed by the Marcos dictatorship 
                    while in Hawaii.    
                    </p>
                </Book>
                <Book coverImage="yujiIchioka.webp" title="Yuji Ichioka" color='#63252a' position={[-40, 15, -12]}>
                    <p>
                        Yuji Ichioka was born in California in 1936 to a family of Japanese immigrants. Growing up, 
                        he faced discrimination and racism due to his Japanese heritage. In the aftermath of World War II, 
                        Ichioka became interested in the experiences of Japanese Americans during the war. He went on to 
                        become a historian and activist, and his work focused on researching and documenting the internment 
                        of Japanese Americans. He also worked to uncover the experiences of Japanese American soldiers who 
                        fought for the United States during the war, despite their families being imprisoned in internment 
                        camps. Ichioka's efforts to increase awareness of the Japanese American experience led him to become 
                        an advocate for Asian American studies programs in universities. He was a founding member of the 
                        Asian American Political Alliance and the Asian American Studies Department at UCLA. His work was 
                        instrumental in helping to create a space for Asian American voices in academia and increasing 
                        awareness of the Asian American experience among the general public. Ichioka's contributions to the 
                        field of Asian American studies continue to be felt today. His work helped to establish the 
                        importance of Asian American history and experiences in the broader context of American history. 
                        Through his activism and scholarship, Ichioka left a lasting legacy that has helped to shape our 
                        understanding of the Asian American experience.
                    </p> 
                </Book>
                <Book coverImage="peteryew.png" title="Peter Yew Beating" color='#63252a' position={[40, 15, 10]}>
                    <p>
                        Peter Yew’s beating and the subsequent protests in 1975 represent an important moment of Asian
                        American resistance against police brutality. Yew, a Chinese American, was beaten by San
                        Francisco police officers, and his story quickly spread throughout the Asian American community,
                        leading to widespread outrage and protests. The protests were a rare display of Asian American
                        unity and activism, and they highlighted the systemic issues of police brutality and
                        discrimination that were affecting Asian Americans at the time. The protests sparked by the
                        beating of Peter Yew in 1975 were significant as they represented a rare display of unity and
                        activism among Asian Americans. At a time when the struggles and experiences of Asian Americans
                        were often overlooked or marginalized, these protests brought attention to the systemic issues
                        of police brutality and discrimination that were affecting the community. The collective voice
                        of Asian Americans in standing up against injustice demonstrated their resilience,
                        determination, and solidarity in the face of adversity. It was a powerful moment that shed light
                        on the need for social change and paved the way for greater awareness and advocacy for the
                        rights and well-being of Asian Americans.Yew’s story is just one example of the many instances
                        of police brutality and mistreatment of Asian Americans that have been documented throughout
                        American history, from the Chinese Massacre of 1871 to the Vincent Chin case in 1982. However,
                        Yew’s case and the resulting protests played an important role in raising awareness about the
                        issue and encouraging other Asian Americans to speak out against injustice. Today, the fight
                        against police brutality and racial discrimination continues, with recent incidents like the
                        killing of George Floyd and the rise in anti-Asian hate crimes serving as a reminder of the
                        ongoing struggle for justice. 
                    </p>
                </Book>
                <Book coverImage="chinatown.jpg" title="9/11 and Racism/Shootings" color='#435c4c' position={[60, 5, -5]}>
                    <p> Nate saw Jacob Bates<br/>
                        As he ate the last Pancake<br/>
                        His mate thought it was a mistake<br/>
                        Nate saw Jacob Bates<br/><br/>

                        He came home very late<br/>
                        Jacob Bates deserved the worst fate.<br/>
                        Nate thought it was a mistake.<br/>
                        Nate saw Jacob Bates.<br/><br/>

                        Sheraz thought it was great<br/>
                        That Nate's remains were on a plate<br/>
                        Jacob smuggled them through a gate<br/>
                        alas, it was much too late,<br/>
                        for nate the great,<br/>
                        to make his great escape<br/><br/>

                        Sheraz got out without a scrape,<br/>
                        but the great nate ate his last grape<br/>
                        he did not deserve this horrid fate<br/>
                        but now his scraps are in a crate<br/>
                        Nate saw Jacob Bates</p>
                </Book>
                <Book coverImage="aapa.png" title="Model Minority" color='#235b99' position={[35, 5, 10]}>
                    <p>
                        The US wanted to be on good terms with China because they were allies against Japan, so they
                        "recast" Chinese Americans to be "model minorities" to repeal laws like the Chinese Exclusion
                        Act. Korean and Japanese immigrants continued to be stereotyped as model minorities even though
                        the government became hostile to Chinese Americans and later Vietnamese due to the Vietnam War.
                        The idea of "model minority" was later used to delegitimize the black civil rights movement.
                        Contrary to these stereotypes, Asian communities had actually faced challenges and didn't like
                        the "model minority" stereotype. Emma Gee and Yugi Ichioka wanted to unify Asian immigrants
                        around a common identity and the common experience of marginalization, which led to the Asian
                        American Movement.
                    </p>
                </Book>
                <Book coverImage="pickets.png" title="Third World Revolution" color='#435c4c' position={[0, 30, -15]}>
                    <p>
                        From 1968-1969, strikes were held calling for greater proportions of colored students and
                        faculty, with Asian Americans among them. For example, at San Francisco State, the AAPA,
                        Intercollegiate Chinese for Social Action, and Pilipino-American Collegiate Endeavour banded
                        together to represent Asian Americans in the strike. Another strike happened at UC Berkeley.
                        They also protested events such as US involvement in the Vietnam War. These strikes were
                        publicized and countered the popular depiction of Asian Americans as quiet minorities. The
                        strikes also inspired students and activists to fight for the preservation of Asian American
                        neighborhoods.
                    </p>
                    <p>[TO BE EXPANDED]</p>
                </Book>
                <Book title="Bibliography" color='#235b99' position={[0, 45, 10]}>
                    <div className="bibliography">
                        <p>Seattle's Asian American Movement - Seattle Civil Rights and Labor History Project, https://depts.washington.edu/civilr/aa_intro.htm. Accessed 3 May 2023.</p>
                        <p>“An Alternative History of American Immigration.” Libertarianism.org, 31 March 2020, https://www.libertarianism.org/essays/alternative-history-american-immigration. Accessed 3 May 2023.</p>
                        <p>“Asian Americans Then and Now.” Asia Society, https://asiasociety.org/education/asian-americans-then-and-now. Accessed 3 May 2023.</p>
                        <p>“Asian Americans Then and Now.” Asia Society, https://asiasociety.org/education/asian-americans-then-and-now. Accessed 3 May 2023.</p>
                        <p>Chen, Michelle. “Making and Unmaking the Asian American Movement.” Asian American Writers' Workshop, 17 November 2016, https://aaww.org/asian-american-movement/. Accessed 7 May 2023.</p>
                        <p>De Leon, Adrian. “The long history of racism against Asian Americans in the U.S.” PBS, 9 April 2020, https://www.pbs.org/newshour/nation/the-long-history-of-racism-against-asian-americans-in-the-u-s. Accessed 3 May 2023.</p>
                        <p>“FBI Records: The Vault — Richard Matsui Aoki.” FBI Vault, https://vault.fbi.gov/richard-m.-aoki. Accessed 9 May 2023.</p>
                        <p>Gonzales, Richard. “Did Man Who Armed Black Panthers Lead Two Lives?” NPR, 3 October 2012, https://www.npr.org/2012/10/03/161408561/did-man-who-armed-black-panthers-lead-two-lives. Accessed 9 May 2023.</p>
                        <p>Gross, Larry, and Walter P. Reuther. “Workers United: The Delano Grape Strike and Boycott (U.S.” National Park Service, 19 December 2022, https://www.nps.gov/articles/000/workers-united-the-delano-grape-strike-and-boycott.htm. Accessed 4 May 2023.</p>
                        <p>Hamblin, Lawrence. “The social and political activism of the Asian American movement.” ScholarBlogs, 4 May 2021, https://scholarblogs.emory.edu/woodruff/news/the-social-and-political-activism-of-the-asian-american-movement. Accessed 3 May 2023.</p>
                        <p>“Inventing the “Model Minority”: A Critical Timeline and Reading List.” Densho, 15 December 2021, https://densho.org/catalyst/inventing-the-model-minority-a-critical-timeline-and-reading-list/. Accessed 7 May 2023.</p>
                        <p>Jimenez, Monica. “How Asian Americans Have Influenced Popular Culture.” Tufts Now, 18 May 2022, https://now.tufts.edu/2022/05/18/how-asian-americans-have-influenced-popular-culture. Accessed 3 May 2023.</p>
                        <p>Kim, Inga. “The 1965-1970 Delano Grape Strike and Boycott - UFW.” UFW, 7 March 2017, https://ufw.org/1965-1970-delano-grape-strike-boycott/. Accessed 4 May 2023.</p>
                        <p>Lange, Dorothea. “Horse Stall Housing, Spoiled Ham, and Other Stories of Life in Tanforan.” Densho, 25 August 2022, https://densho.org/catalyst/stories-of-life-in-tanforan/. Accessed 9 May 2023.</p>
                        <p>Lee , Corky. “Our History.” Asian Americans for Equality, https://www.aafe.org/who-we-are/our-history. Accessed 3 May 2023.</p>
                        <p>“Martial Law Heroes and Martyrs - VIERNES, Gene Allen.” pinkpedia, https://pinkpedia.org/wiki/Martial_Law_Heroes_and_Martyrs_-_VIERNES,_Gene_Allen. Accessed 3 May 2023.</p>
                        <p>Mejia, Cynthia. “Filipino labor activists Gene Viernes and Silme Domingo are slain in Seattle on June 1, 1981.” HistoryLink.org, 3 December 1998, https://www.historylink.org/File/412. Accessed 3 May 2023.</p>
                        <p>Mineo, Liz. “A long history of bigotry against Asian Americans.” Harvard Gazette, 24 March 2021, https://news.harvard.edu/gazette/story/2021/03/a-long-history-of-bigotry-against-asian-americans/. Accessed 3 May 2023.</p>
                        <p>Myer, Dillon S. “The War Relocation Authority & the Incarceration of Japanese-Americans During World War II | Harry S. Truman.” Truman Library, https://www.trumanlibrary.gov/library/online-collections/war-relocation-authority-and-incarceration-of-japanese-americans. Accessed 9 May 2023.</p>
                        <p>Wallace, Nina. “Yellow Power: The Origins of Asian America.” Densho, 8 May 2017, https://densho.org/catalyst/asian-american-movement/. Accessed 3 May 2023.</p>
                        <p>Zheng, Lily. “To Dismantle Anti-Asian Racism, We Must Understand Its Roots.” Harvard Business Review, 27 May 2021, https://hbr.org/2021/05/to-dismantle-anti-asian-racism-we-must-understand-its-roots. Accessed 6 May 2023.</p>
                    </div>
                </Book>
            </Bookshelf>
        </main>
    );
}

export default App;
