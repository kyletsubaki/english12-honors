import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function AutoLink(props: React.HTMLProps<HTMLAnchorElement>) {
    return <a {...props}>{props.href}</a>;
}

function App() { 
    return (
        <main>
            <div className="nameplate-container">
                <div className="nameplate">{process.env.REACT_APP_FUNNY_NAMES
                    ? <>My son Bread, Kevin Pinecone, Kylie Soup-Pocky, Joshua Food<br/>CEOs of Xom.inc</>
                    : <>Mason Beard, Devin Ponciano, Kyle Tsubaki, Josiah Fu</>
                }</div>
            </div>
            <Bookshelf>
                <Book coverImage="internment.jpg" title="War Relocation Authority" color='#235b99' position={[40, 0, -15]}>
                    <p>
                        During the second world war, the US government evicted over 120,000 Japanese Americans from the
                        Pacific region. These people were sent to one of the ten camps, and were forced to live under
                        the watch of guards and surrounded by barbed wire. Sometimes these people were forced into horse
                        stalls and had to sleep on hay. As put by Yukiko Kimura, &ldquo;This lake was the outstanding
                        improvement that the Japanese here have made here at Tanforan. When we first arrived the side of
                        the lake was only an unattractive, dried-up hole in the ground. The men built up its sides,
                        planted trees, made a picturesque arbor, and as the crowning achievement, built a marvelous
                        bridge… out of logs in &lsquo;neither American nor Japanese but in typical Tanforan
                        style.&rsquo; It was then filled with water, and the end result was a transformation which
                        seemed to be little short of a miracle.&rdquo; There was no plumbing and there were six feet
                        high snow drifts in some camps. As Richard Aoki puts it, the food was &ldquo;atrocious&rdquo;.
                        Medical supplies were low in the camps because the war took priority. Protesters on the outside
                        would go to jail. People were able to work, and would get paid $16/month. These people were told
                        that they were being protected, yet the barb wire poked inward, guard towers watched them, and
                        had half tracks blocking them from leaving. The Japanese American community lost more than 6
                        billion dollars when properties were confiscated.
                    </p>
                </Book>
                <Book coverImage="richardAoki.webp" title="Richard Aoki" color='#63252a' position={[0, 10, 0]}>
                    <p>
                        Richard Aoki was a Japanese-American Activist that was a part of a group called the Black
                        Panther Party. He is a 3rd generation born citizen and was sent to the internment camps at the
                        age of 5. He always thought the internment camps were how the world looked like, and never knew
                        an actual house until the age of 9. His family moved to Oakland with his grandparents. He was
                        not the best kid. He would pickpocket and steal from shops. In Oakland, there is a longstanding
                        African American population due to the railroads. He heard about all of the stories about
                        lynchings, and Aoki wanted to make a difference. During the cold war, he joined the military
                        because every male was expected to serve. As he continued to serve, he found his beliefs for
                        fighting in the vietnam war were against his. When he left, he found the Black Panther Party. At
                        first, he didn&rsquo;t feel like he was right for it. Saying, &ldquo;I know you two guys are
                        crazy, &lsquo;cuz we drafted the program together. Are you blind as well? I&rsquo;m not
                        Black.&rdquo; The BPP was a radical group with the ideology of removing police brutality from
                        the US, but their methods were considered &ldquo;terrorist-like&rdquo;. They wanted to police
                        the police, since they were made up of mostly white men. This group committed over 500 different
                        crimes which consisted of dramatic demonstrations and news conferences, shootouts, police raids,
                        arrests, hijackings, trials, and murders. He provided this group with guns and the group was
                        considered a &ldquo;threat to internal security&rdquo;. He was able to sue the FBI five times to
                        get 300,000 pages of heavily redacted documents. He was accused of being an FBI informant, yet
                        people don&rsquo;t know if it really is true.
                    </p>
                </Book>
                <Book coverImage="dbm2013.png" title="Delano Grape Strike" color='#235b99' position={[0, 10, 0]}>
                    <p>
                        In 1965, farmworkers in Delano, California went on strike. Many of these workers were Filipino
                        people. They were demanding higher wages and fairer pay for their work. Larry Itliong and Ben
                        Gines, leaders of the Agricultural Workers Organizing Committee (AWOC), led the strike.
                        Eventually, another group, the National Farm Workers Association (NFWA), led by Cesar Chavez,
                        joined the strike. Despite facing threats and violence, the farmworkers of both AWOC and NFWA
                        continued to strike. The NFWA launched a boycott campaign, urging people not to buy products
                        from growers who mistreated their workers. This put pressure on the growers to recognize the
                        NFWA as a legitimate union and negotiate with them. The union fought for more than just better
                        wages. They also fought for things like healthcare, decent housing, and fair working conditions.
                        To make their voices heard, union members refused to work and created picket lines. They held
                        signs saying things like &ldquo;Boycott California Grapes&rdquo; and &ldquo;Huelga&rdquo; (which
                        means &ldquo;strike&rdquo; in Spanish). Before the union gained power, many farmworkers lived in
                        extreme poverty. They lacked basic necessities like electricity, running water, and proper
                        toilets. Some of them even lived in their cars. This struggle for farmworker rights became part
                        of a larger movement for civil rights and social justice. Hispanic Americans and Filipino
                        Americans worked together and made a lasting impact on the agricultural industry in favor of the
                        workers across the entire country. 
                    </p>
                </Book>
                <Book coverImage="withey2018.png" title="Gene Allen" color='#63252a' position={[-20, 40, 10]}>
                    <p>
                        Gene Allen, a Filipino individual, grew up in poverty in Philadelphia and faced the challenges
                        that come with being an Asian American. As he aged he gained an interest in politics, and
                        eventually he established a committee dedicated to the Filipino cause in America. This committee
                        was known as the &ldquo;Rank and File&rdquo; committee and sought to improve the conditions of
                        Filipino people on several fronts like workforce or representation. Over time, this committee
                        gained recognition and influence, particularly in opposition to the dictatorship of Ferdinand
                        Marcos in the Philippines. Marcos&rsquo;s leadership was filled with corruption and led the
                        country of the Philippines into near ruin. Gene Allen&rsquo;s committee aimed to shed light on
                        the dire situation in the Philippines under Marcos&rsquo;s rule. As part of Gene Allen&rsquo;s
                        efforts, he traveled to Hawaii to participate in an international convention. During this event,
                        he not only raised awareness about the Filipino dictatorship but also gained firsthand knowledge
                        of the conditions faced by Filipino workers. As a result, Gene Allen, along with another
                        Filipino activist named Slime Domingo, decided to take action to create better conditions for
                        Filipino people, similar to Gene Allen&rsquo;s &ldquo;Rank and File&rdquo; committee. Together,
                        they attempted a coup in Hawaii, seeking to bring about change and improve the rights and
                        welfare of Filipino workers. Additionally, they formed the Katipunan ng mga Demokratikong
                        Pilipino, a group dedicated to defending the rights of Filipino workers. However, their attempt
                        was met with a violent response from the Marcos dictatorship. While in Hawaii, Gene Allen and
                        Slime Domingo were shot and killed, this transformed them from activists to martyrs. Gene
                        Allen&rsquo;s story serves as a testament to the power of individuals to make a difference, even
                        in the face of great adversity. His unwavering commitment to justice and his passion for the
                        welfare of Filipino workers continue to inspire others in their own pursuits for a more
                        equitable society.
                    </p>
                </Book>
                <Book coverImage="yujiIchioka.webp" title="Yuji Ichioka" color='#63252a' position={[-40, 15, -12]}>
                    <p>
                        Yuji Ichioka was born in California in 1936 to a family of Japanese immigrants. Growing up, he
                        faced discrimination and racism due to his Japanese heritage. In the aftermath of World War II,
                        Ichioka became interested in the experiences of Japanese Americans during the war. He went on to
                        become a historian and activist, and his work focused on researching and documenting the
                        internment of Japanese Americans. He also worked to uncover the experiences of Japanese American
                        soldiers who fought for the United States during the war, despite their families being
                        imprisoned in internment camps. Ichioka&rsquo;s efforts to increase awareness of the Japanese
                        American experience led him to become an advocate for Asian American studies programs in
                        universities. He was a founding member of the Asian American Political Alliance and the Asian
                        American Studies Department at UCLA. His work was instrumental in helping to create a space for
                        Asian American voices in academia and increasing awareness of the Asian American experience
                        among the general public. Ichioka&rsquo;s contributions to the field of Asian American studies
                        continue to be felt today. His work helped to establish the importance of Asian American history
                        and experiences in the broader context of American history. Through his activism and
                        scholarship, Ichioka left a lasting legacy that has helped to shape our understanding of the
                        Asian American experience.
                    </p> 
                </Book>
                <Book coverImage="peteryew.png" title="Peter Yew Beating" color='#63252a' position={[40, 15, 10]}>
                    <p>
                        Peter Yew&rsquo;s beating and the subsequent protests in 1975 represent an important moment of
                        Asian American resistance against police brutality. Yew, a Chinese American, was beaten by San
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
                        rights and well-being of Asian Americans.Yew&rsquo;s story is just one example of the many
                        instances of police brutality and mistreatment of Asian Americans that have been documented
                        throughout American history, from the Chinese Massacre of 1871 to the Vincent Chin case in 1982.
                        However, Yew&rsquo;s case and the resulting protests played an important role in raising
                        awareness about the issue and encouraging other Asian Americans to speak out against injustice.
                        Today, the fight against police brutality and racial discrimination continues, with recent
                        incidents like the killing of George Floyd and the rise in anti-Asian hate crimes serving as a
                        reminder of the ongoing struggle for justice. 
                    </p>
                </Book>
                <Book coverImage="911.jpg" title="9/11 and Racism/Shootings" color='#435c4c' position={[60, 5, -5]}>
                    <p>
                        After the events of 9/11, the people of the US were scared that there would be more terrorist
                        attacks, which caused an uproar of racism. In a local gas station in Texas, Vasudev Patel was
                        shot and killed by Mark Stroman as he was working. Mark Stroman’s intent for the murder was that
                        Patel was of Middle Eastern descent. Several other people were murdered including Waqar Hasan, a
                        Pakistani immigrant, and Rais Bhuiyan, an immigrant from Bangladesh. These people were murdered
                        in cold blood just because of their skin. Even the killer himself admitted that this was all
                        because of the events that occurred during 9/11. He was sentenced as the 1,262nd death row
                        prisoner and executed on July 20, 2011 through lethal injection.
                    </p>
                </Book>
                <Book coverImage="aapa.png" title="Model Minority" color='#235b99' position={[35, 5, 10]}>
                    <p>
                        During the 1940s, the US allied with China against Japan, so they &ldquo;recast&rdquo; Chinese
                        Americans to be &ldquo;model minorities&rdquo; to repeal laws like the Chinese Exclusion Act.
                        After the war had ended, Japanese Americans previously in internnent camps were encouraged to
                        integrate quietly back in to society. Korean and Japanese immigrants continued to be stereotyped
                        as model minorities even though the government became hostile to Japanese Americans and later
                        Vietnamese due to the Vietnam War. The idea of &ldquo;model minority&rdquo; was later used to
                        delegitimize the black civil rights movement. Contrary to these stereotypes, Asian communities
                        had actually faced challenges and didn&rsquo;t like the &ldquo;model minority&rdquo; stereotype.
                    </p>
                </Book>
                <Book coverImage="pickets.png" title="Third World Revolution" color='#435c4c' position={[0, 30, -15]}>
                    {/*<p>
                        From 1968-1969, strikes were held calling for greater proportions of colored students and
                        faculty, with Asian Americans among them. For example, at San Francisco State, the AAPA,
                        Intercollegiate Chinese for Social Action, and Pilipino-American Collegiate Endeavour banded
                        together to represent Asian Americans in the strike. Another strike happened at UC Berkeley.
                        They also protested events such as US involvement in the Vietnam War. These strikes were
                        publicized and countered the popular depiction of Asian Americans as quiet minorities. The
                        strikes also inspired students and activists to fight for the preservation of Asian American
                        neighborhoods.
                    </p>*/}
                    <p>
                        {/*The Third World Revolution represented a shift in the way people of color organized and fought
                        against systemic racism and oppression in the United States. This movement recognized that the
                        struggles faced by Asian Americans, African Americans, Latinx Americans, and Native Americans
                        were not separate but interconnected. This recognition led to greater solidarity and unity among
                        people of color, and Asian Americans played an important role in this movement.*/}
                        The Third World Revolution was a movement that brought together many ethnicities to to fight
                        against systemic racism and oppression. One part of the movement was strikes at major
                        universities like San Francisco State and UC Berkeley protesting for more minority faculty and
                        students. This was one of the first times Asian groups banded together under the banner of
                        &ldquo;Asian American&rdquo;, marking the beginning of a united fight for freedom. For example,
                        at San Francisco State the AAPA, Intercollegiate Chinese for Social Action, and
                        Pilipino-American Collegiate Endeavour made up the Asian American section of the strike. At UC
                        Berkeley, these strikes led to the creation of a department of Ethnic Studies, although
                        protesters saw this as the faculty just trying to stop the strike and continued protesting for a
                        Third World College. The movement also included protesting events such as the US&rsquo;s
                        involvement in the Vietnam War and fighting for the preservation of Asian American
                        neighborhoods. These activists did manage to get governments to provide money for residents,
                        businesses, and community groups in these neighborhoods to relocate, and were able to delay and
                        prevent some evictions. These are examples of the Third World Revolution and how they fought
                        against systemic racism.
                    </p>
                </Book>
                <Book title="Bibliography" color='#768b99' position={[0, 45, 10]}>
                    <div className="bibliography">
                        <p>Seattle&rsquo;s Asian American Movement - Seattle Civil Rights and Labor History Project, <AutoLink href="https://depts.washington.edu/civilr/aa_intro.htm" />. Accessed 3 May 2023.</p>
                        <p>&ldquo;An Alternative History of American Immigration.&rdquo; Libertarianism.org, 31 March 2020, <AutoLink href="https://www.libertarianism.org/essays/alternative-history-american-immigration" />. Accessed 3 May 2023.</p>
                        <p>&ldquo;Asian Americans Then and Now.&rdquo; Asia Society, <AutoLink href="https://asiasociety.org/education/asian-americans-then-and-now" />. Accessed 3 May 2023.</p>
                        <p>Chen, Michelle. &ldquo;Making and Unmaking the Asian American Movement.&rdquo; Asian American Writers&rsquo; Workshop, 17 November 2016, <AutoLink href="https://aaww.org/asian-american-movement/" />. Accessed 7 May 2023.</p>
                        <p>De Leon, Adrian. &ldquo;The long history of racism against Asian Americans in the U.S.&rdquo; PBS, 9 April 2020, <AutoLink href="https://www.pbs.org/newshour/nation/the-long-history-of-racism-against-asian-americans-in-the-u-s" />. Accessed 3 May 2023.</p>
                        <p>&ldquo;FBI Records: The Vault - Richard Matsui Aoki.&rdquo; FBI Vault, <AutoLink href="https://vault.fbi.gov/richard-m.-aoki" />. Accessed 9 May 2023.</p>
                        <p>Gonzales, Richard. &ldquo;Did Man Who Armed Black Panthers Lead Two Lives?&rdquo; NPR, 3 October 2012, <AutoLink href="https://www.npr.org/2012/10/03/161408561/did-man-who-armed-black-panthers-lead-two-lives" />. Accessed 9 May 2023.</p>
                        <p>Gross, Larry, and Walter P. Reuther. &ldquo;Workers United: The Delano Grape Strike and Boycott (U.S.&rdquo; National Park Service, 19 December 2022, <AutoLink href="https://www.nps.gov/articles/000/workers-united-the-delano-grape-strike-and-boycott.htm" />. Accessed 4 May 2023.</p>
                        <p>Hamblin, Lawrence. &ldquo;The social and political activism of the Asian American movement.&rdquo; ScholarBlogs, 4 May 2021, <AutoLink href="https://scholarblogs.emory.edu/woodruff/news/the-social-and-political-activism-of-the-asian-american-movement" />. Accessed 3 May 2023.</p>
                        <p>&ldquo;Inventing the &ldquo;Model Minority&rdquo;: A Critical Timeline and Reading List.&rdquo; Densho, 15 December 2021, <AutoLink href="https://densho.org/catalyst/inventing-the-model-minority-a-critical-timeline-and-reading-list/" />. Accessed 7 May 2023.</p>
                        <p>Jimenez, Monica. &ldquo;How Asian Americans Have Influenced Popular Culture.&rdquo; Tufts Now, 18 May 2022, <AutoLink href="https://now.tufts.edu/2022/05/18/how-asian-americans-have-influenced-popular-culture" />. Accessed 3 May 2023.</p>
                        <p>Kim, Inga. &ldquo;The 1965-1970 Delano Grape Strike and Boycott - UFW.&rdquo; UFW, 7 March 2017, <AutoLink href="https://ufw.org/1965-1970-delano-grape-strike-boycott/" />. Accessed 4 May 2023.</p>
                        <p>Lange, Dorothea. &ldquo;Horse Stall Housing, Spoiled Ham, and Other Stories of Life in Tanforan.&rdquo; Densho, 25 August 2022, <AutoLink href="https://densho.org/catalyst/stories-of-life-in-tanforan/" />. Accessed 9 May 2023.</p>
                        <p>Lee , Corky. &ldquo;Our History.&rdquo; Asian Americans for Equality, <AutoLink href="https://www.aafe.org/who-we-are/our-history" />. Accessed 3 May 2023.</p>
                        <p>&ldquo;Martial Law Heroes and Martyrs - VIERNES, Gene Allen.&rdquo; pinkpedia, <AutoLink href="https://pinkpedia.org/wiki/Martial_Law_Heroes_and_Martyrs_-_VIERNES,_Gene_Allen" />. Accessed 3 May 2023.</p>
                        <p>Mejia, Cynthia. &ldquo;Filipino labor activists Gene Viernes and Silme Domingo are slain in Seattle on June 1, 1981.&rdquo; HistoryLink.org, 3 December 1998, <AutoLink href="https://www.historylink.org/File/412" />. Accessed 3 May 2023.</p>
                        <p>Mineo, Liz. &ldquo;A long history of bigotry against Asian Americans.&rdquo; Harvard Gazette, 24 March 2021, <AutoLink href="https://news.harvard.edu/gazette/story/2021/03/a-long-history-of-bigotry-against-asian-americans/" />. Accessed 3 May 2023.</p>
                        <p>Myer, Dillon S. &ldquo;The War Relocation Authority &amp; the Incarceration of Japanese-Americans During World War II | Harry S. Truman.&rdquo; Truman Library, <AutoLink href="https://www.trumanlibrary.gov/library/online-collections/war-relocation-authority-and-incarceration-of-japanese-americans" />. Accessed 9 May 2023.</p>
                        <p>Wallace, Nina. &ldquo;Yellow Power: The Origins of Asian America.&rdquo; Densho, 8 May 2017, <AutoLink href="https://densho.org/catalyst/asian-american-movement/" />. Accessed 3 May 2023.</p>
                        <p>Zheng, Lily. &ldquo;To Dismantle Anti-Asian Racism, We Must Understand Its Roots.&rdquo; Harvard Business Review, 27 May 2021, <AutoLink href="https://hbr.org/2021/05/to-dismantle-anti-asian-racism-we-must-understand-its-roots" />. Accessed 6 May 2023.</p>
                    </div>
                </Book>
            </Bookshelf>
        </main>
    );
}

export default App;
