import React from 'react';
import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function App() { // Content go here :)
    return (
        <main>
            <Bookshelf>
                <Book coverImage="internment.jpg" title="War Relocation Authority" color='#235b99' position={[-140, -30, -15]}>
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
                <Book coverImage="richardAoki.webp" title="Richard Aoki" color='#63252a' position={[-50, 10, 25]}>
                    <p>
                        Richard Aoki was a Japanese-American Activist that was a part of a group called the Black
                        Panther Party. He provided this group with guns and the group was considered a “threat to
                        internal security”. The group&rsquo;s goal was the end of police brutality and murder of black people.
                        They wanted to police the police, since they were made up of mostly white men. He was able to
                        sue the FBI five times to get 300,000 pages of heavily redacted documents. He was accused of
                        being an FBI informant, yet people don&rsquo;t know if it really is true.
                    </p>
                </Book>
                <Book coverImage="dbm2013.png" title="Delano Grape Strike" color='#235b99' position={[20, 10, 0]}>
                    <p>
                        In 1965, Filipino farmworkers in Delano, California went on strike, demanding a raise in hourly
                        wages and piece rates. The strike was led by Larry Itliong and Ben Gines of the Agricultural
                        Workers Organizing Committee (AWOC). The National Farm Workers Association (NFWA), led by Cesar
                        Chavez, also joined the strike after a vote. Even after being threatened and attacked, the
                        farmworkers continued in their strike, and the NFWA did a consumer boycott campaign which
                        pressured growers into recognizing the NFWA as a union. This struggle for farmworker rights
                        ultimately became part of a larger movement for civil rights and social justice. It was a joint
                        effort between both Hispanic Americans and Filipino Americans that ultimately impacted the
                        entirety of the agricultural economy in favor of the workers.
                    </p>
                </Book>
                <Book coverImage="withey2018.png" title="Gene Allen" color='#63252a' position={[60, -20, 10]}>
                    <p>
                        Gene Allen was a Filipino person who grew up extremely poor in Philadelphia. He experienced the
                        hardships of being an Asian American. As he grew up he became interested in politics and even
                        made a committee for the Philippines in America. This committee later gained a position in the
                        government against the dictatorship of Marcos. This dictatorship kept the Philippines in a form
                        of disarray and corruption. Gene Allen&rsquo;s committee hoped to bring light to this situation. After
                        that, he traveled to Hawaii to participate in an international convention in which he spread
                        information about the Filipino dictatorship and learned about the Filipino workers conditions.
                        After hearing about the conditions he and another FIlipino, Slime Domingo, attempted a coup in
                        Hawaii for Filipino workers while also created the Katipunan ng mga Demokratikong Pilipino
                        group. This group sought to also defend Filipino workers rights. However, they were shot and
                        killed by the Marcos dictatorship while in Hawaii.
                    </p>
                </Book>
                <Book coverImage="peteryew.png" title="Peter Yew Beating" color='#63252a' position={[-80, 15, 10]}>
                    {/* <p>
                        Yuji Ichioka was a prominent figure in Asian American history. He was a scholar, historian, and
                        activist who dedicated his life to studying and advocating for the rights and recognition of
                        Asian Americans. Born in 1936 in California, he grew up experiencing the racism and
                        discrimination faced by Asian Americans during that time. Ichioka co-founded the UCLA Asian
                        American Studies Center in 1969, which became a pivotal institution for Asian American studies.
                        He played a crucial role in developing the concept of "Asian American" as a unifying identity
                        for diverse Asian ethnic groups in the United States. Through his research and activism, Ichioka
                        sought to shed light on the contributions and struggles of Asian Americans, challenging
                        stereotypes and promoting social justice. His work greatly influenced the field of Asian American
                        studies and continues to inspire generations of scholars and activists.
                    </p> */}
                    <p>
                        In 1975, Peter Yew, a Chinese American man, was brutally beaten by police officers in New York
                        City's Chinatown. The incident took place on May 17th, during a period of heightened tensions
                        between law enforcement and the Asian American community. The beating of Peter Yew sparked
                        outrage and led to widespread protests and demonstrations in Chinatown. Community members and
                        activists rallied together to demand justice for Yew and an end to police brutality. The
                        protests highlighted the long-standing issue of mistreatment and discrimination faced by Asian
                        Americans at the hands of law enforcement. The incident and subsequent protests shed light on
                        the systemic issues of racial bias and violence within the criminal justice system, sparking
                        conversations and calls for reform. The Peter Yew beatings and protests of 1975 were a
                        significant moment in Asian American history, bringing attention to the urgent need for change
                        and accountability in policing practices.
                    </p>
                </Book>
                <Book coverImage="chinatown.jpg" title="Police Brutality Against Asians" color='#435c4c' position={[-60, 65, 35]}>
                    <p>CONTENT</p>
                </Book>
                <Book coverImage="aapa.png" title="Vietnamese War March" color='#235b99' position={[0, 40, -20]}>
                    <p>CONTENT</p>
                    {/* <p>
                        The US wanted to be on good terms with China because they were allies against Japan, so they
                        "recast" Chinese Americans to be "model minorities" to repeal laws like the Chinese Exclusion
                        Act. Korean and Japanese immigrants continued to be stereotyped as model minorities even though
                        the government became hostile to Chinese Americans and later Vietnamese due to the Vietnam War.
                        The idea of "model minority" was later used to delegitimize the black civil rights movement.
                        Contrary to these stereotypes, Asian communities had actually faced challenges and didn't like
                        the "model minority" stereotype. Emma Gee and Yugi Ichioka wanted to unify Asian immigrants
                        around a common identity and the common experience of marginalization, which led to the Asian
                        American Movement.
                    </p> */}
                </Book>
                <Book coverImage="pickets.png" title="Third World Revolution" color='#435c4c' position={[40, 30, -30]}>
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
            </Bookshelf>
        </main>
    );
}

export default App;
