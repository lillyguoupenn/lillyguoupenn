const s1a1 = document.getElementById('s1a1');
const s1a2 = document.getElementById('s1a2');
const s1fp = document.getElementById('s1fp');
const s2a1 = document.getElementById('s2a1');
const s2a2 = document.getElementById('s2a2');
const s2fp = document.getElementById('s2fp');
const s3a1 = document.getElementById('s3a1');
const s3a2 = document.getElementById('s3a2');
const s3fp = document.getElementById('s3fp');
const cloud = document.getElementById('cloud');
const s1_label = document.getElementById('s1-label');
const s2_label = document.getElementById('s2-label');
const s3_label = document.getElementById('s3-label');
const cloud_label = document.getElementById('readings-label');

// Add event listeners for hovering over links
s1a1.addEventListener('mouseover', () => {
    s1_label.innerHTML = 'SECTION 1<br>ASSIGNMENT 1';
    s1_label.style.opacity = '1';
});
s1a1.addEventListener('mouseout', () => {
    s1_label.style.opacity = '0';
});

s1a2.addEventListener('mouseover', () => {
    s1_label.innerHTML = 'SECTION 1<br>ASSIGNMENT 2';
    s1_label.style.opacity = '1';
});
s1a2.addEventListener('mouseout', () => {
    s1_label.style.opacity = '0';
});

s1fp.addEventListener('mouseover', () => {
    s1_label.innerHTML = 'SECTION 1<br>FINAL PROJECT';
    s1_label.style.opacity = '1';
});
s1fp.addEventListener('mouseout', () => {
    s1_label.style.opacity = '0';
});

s2a1.addEventListener('mouseover', () => {
    s2_label.innerHTML = 'SECTION 2<br>ASSIGNMENT 1';
    s2_label.style.opacity = '1';
});
s2a1.addEventListener('mouseout', () => {
    s2_label.style.opacity = '0';
});

s2a2.addEventListener('mouseover', () => {
    s2_label.innerHTML = 'SECTION 2<br>ASSIGNMENT 2';
    s2_label.style.opacity = '1';
});
s2a2.addEventListener('mouseout', () => {
    s2_label.style.opacity = '0';
});

s2fp.addEventListener('mouseover', () => {
    s2_label.innerHTML = 'SECTION 2<br>FINAL PROJECT';
    s2_label.style.opacity = '1';
});
s2fp.addEventListener('mouseout', () => {
    s2_label.style.opacity = '0';
});

s3a1.addEventListener('mouseover', () => {
    s3_label.innerHTML = 'SECTION 3<br>ASSIGNMENT 1';
    s3_label.style.opacity = '1';
});
s3a1.addEventListener('mouseout', () => {
    s3_label.style.opacity = '0';
});

s3a2.addEventListener('mouseover', () => {
    s3_label.innerHTML = 'SECTION 3<br>ASSIGNMENT 2';
    s3_label.style.opacity = '1';
});
s3a2.addEventListener('mouseout', () => {
    s3_label.style.opacity = '0';
});

s3fp.addEventListener('mouseover', () => {
    s3_label.innerHTML = 'SECTION 3<br>FINAL PROJECT';
    s3_label.style.opacity = '1';
});
s3fp.addEventListener('mouseout', () => {
    s3_label.style.opacity = '0';
});

cloud.addEventListener('mouseover', () => {
    cloud_label.style.opacity = '1';
});
cloud.addEventListener('mouseout', () => {
    cloud_label.style.opacity = '0';
});



function createRaindrops() {
    const container = document.getElementById('rain-container');
    const week2 = ['Week', '2', '-', 'Ulises', 'Carrión', '-', 'Mail', 'Art', 'and', 'the', 'Big', 'Monster', 'from', 'Second', 'ThoughtsThis', 'is', 'my', 'first', 'time', 'studying', 'art', 'or', 'design,', 'so', 'I', 'was', 'honestly', 'perplexed', 'by', 'Carrions', 'piece.', 'My', 'interpretation', 'is', 'Carrion', 'is', 'attempting', 'to', 'define', 'what', 'is', 'and', 'is', 'not', 'mail', 'art,', 'and', 'how', 'it', 'distinguishes', 'itself', 'from', 'other', 'art', 'forms.', 'He', 'would', 'like', 'to', 'clear', 'the', 'misunderstanding', 'that', 'mail', 'art', 'is', 'simply', 'post', 'cards', 'circulated', 'through', 'the', 'mail', 'system.', 'Instead,', 'he', 'emphasizes', 'that', 'TRUE', 'mail', 'art', 'incorporates', 'mail', 'in', 'an', 'irreplaceable', 'way.', 'I', 'see', 'why', 'the', 'distinction', 'he', 'calls', 'out', 'is', 'an', 'important', 'one', '-', 'often', 'outsiders', '(like', 'me)', 'to', 'a', 'group', '(like', 'the', 'mail', 'artists)', 'do', 'not', 'understand', 'the', 'art', 'form,', 'and', 'it', 'can', 'be', 'frustrating', 'to', 'allow', 'these', 'misconceptions', 'to', 'exist.', 'Discussion', 'questions:', '1', 'How', 'important', 'are', 'definitions', 'of', 'categories', 'of', 'art?', 'Does', 'it', 'matter', 'if', 'a', 'piece', 'of', 'art', 'is', 'mail', 'art', 'in', 'its', 'purest', 'form', 'vs.', 'a', 'lesser', 'form,', 'according', 'to', 'Carrions', 'definition?2.', 'How', 'do', 'you', 'think', 'Carrion', 'would', 'feel', 'now', 'with', 'our', 'extremely', 'interconnected,', 'internet', 'driven', 'society,', 'given', 'how', 'much', 'more', 'overwhelming', 'it', 'is', 'compared', 'to', 'the', '""Big', 'Monster""', 'brought', 'upon', 'by', 'mailing.'];
    const week3 = ['Week', '3', '-', 'Laurel', 'Schwulst', '&', 'Édouard', 'U', '-', 'Selections', 'from', 'Creative', 'Independent', 'and', 'Arena', 'How', 'Do', 'You', 'Use', 'the', 'Internet', 'MindfullyIm', 'a', 'fan', 'of', 'Laurel', 'Schwulsts', 'essay', '--', 'I', 'found', 'it', 'approachable,', 'inviting,', 'thought-provoking,', 'and', 'fun.', 'I', 'havent', 'spent', 'much', 'time', 'reflecting', 'on', 'how', 'I', 'use', 'the', 'internet,', 'and', 'I', 'appreciated', 'how', 'Schwulsts', 'metaphors', 'expanded', 'my', 'imagination', 'of', 'what', 'a', 'website', 'can', 'be.', 'The', 'talking', 'sparrows', 'were', 'entertaining', 'as', 'well.', 'I', 'interpreted', 'them', 'as', 'a', 'reference', 'to', 'one', 'of', 'Schwulsts', 'metaphors:', '""The', 'web', 'is', 'a', 'flock', 'of', 'birds...""On', 'the', 'other', 'hand,', 'I', 'thought', 'Edouard', 'Us', 'essay', 'was', 'much', 'less', 'likable.', 'Similar', 'to', 'some', 'of', 'the', 'discussion', 'posts', 'on', 'Ulises', 'Carrion,', 'I', 'found', 'Us', 'writing', 'to', 'be', 'very', 'pretentious.', 'Something', 'about', 'how', 'he', 'presents', 'his', '""methods""', 'for', 'avoiding', '""conceptual', 'isolation""', 'and', 'boasts', 'how', 'he', 'has', '""nurtured', 'the', 'ability', 'to', 'form', 'very', 'distinct', 'pockets', 'of', 'personal', 'meaning', 'across', 'time', 'and', 'space""...', 'He', 'sounds', 'as', 'though', 'he', 'has', 'figured', 'out', 'the', 'better', 'way', 'to', 'live', 'life', '(an', 'inherently', 'subjective', 'topic),', 'and', 'believes', 'he', 'must', 'tutor', 'the', 'poor', 'souls', 'that', 'live', 'theirs', 'differently.', 'It', 'is', 'one', 'thing', 'to', 'offer', 'insight', 'on', 'how', 'you', 'see', 'the', 'world', 'and', 'what', 'practices', 'you', 'have,', 'but', 'it', 'is', 'another', 'to', 'suggest', 'your', 'way', 'is', 'the', 'objective', 'best.', '1', 'What', 'is', 'the', 'significance/symbolism', 'of', 'Schwulsts', 'sparrows?', '2', 'Edouard', 'U', 'disparages', 'the', 'idea', 'of', '""conceptual', 'isolation""', '(""I', 'believe', 'conceptual', 'isolation', 'creates', 'the', 'death', 'of', 'meaning.)', '--', 'to', 'play', 'devils', 'advocate,', 'what', 'are', 'the', 'cons', 'to', 'looking', 'at', 'information', 'in', 'the', 'way', 'U', 'promotes?'];
    const week4 = ['Week', '4', '-', 'Olia', 'Lialina', '-', 'STILL', 'THERE', 'Ruins', 'and', 'Templates', 'of', 'Geocities', 'from', 'Lost', 'and', 'Living', '(in)', 'ArchivesIve', 'never', 'consciously', 'thought', 'about', 'the', 'impermanence', 'of', 'the', 'web,', 'and', 'how', 'this', 'impermanence', 'can', 'impact', 'historical', 'record', 'keeping.', 'Ive', 'always', 'thought', 'of', 'the', 'amount', 'of', 'data', 'on', 'the', 'web', 'as', 'growing', 'as', 'time', 'goes', 'on', '--', 'people', 'mostly', 'add', 'to', 'it', 'and', 'dont', 'really', 'delete,', 'because', 'theres', 'so', 'much', 'space', 'for', 'all', 'of', 'our', 'stuff', 'anyway', '--', 'but', 'it', 'makes', 'sense', 'that', 'people', 'or', 'companies', 'do', 'not', 'want', 'to', 'indefinitely', 'maintain', 'irrelevant', 'websites', 'and', 'those', 'websites', 'are', 'lost', 'as', 'a', 'result.', 'Im', 'glad', 'there', 'are', 'people', 'who', 'are', 'keeping', 'track', 'of', 'these', 'types', 'of', 'things', 'so', 'we', 'can', 'preserve', 'pieces', 'of', 'history', 'such', 'as', 'Geocities.', '1', 'What', 'types', 'of', 'present-day', 'web', 'data', 'will', 'be', 'consciously', 'preserved', 'in', 'the', 'future', '(e.g.,', 'record', 'of', 'all', 'Tweets)?', '2', 'When', 'something', 'is', 'lost,', 'the', 'loss', 'often', 'creates', 'space', 'for', 'something', 'new', 'to', 'grow.', 'What', 'do', 'you', 'think', 'was', 'able', 'to', 'grow', 'thanks', 'to', 'the', 'loss', 'of', 'Geocities?'];
    const week6 = ['Week', '6', '-', 'Bojana', 'Coklyat', '&', 'Shannon', 'Finnegan', '-', 'Selections', 'from', 'Alt-Text', 'as', 'Poetry', 'WorkbookI', 'really', 'enjoyed', 'this', 'weeks', 'reading.', 'Coklyat', 'and', 'Finnegans', 'goals', 'and', 'takeaways', 'are', 'clear,', 'but', 'the', 'perspective', 'itself', 'is', 'complex', 'and', 'nuanced.', 'I', 'very', 'much', 'appreciate', 'how', 'clearly', 'the', 'authors', 'clearly', 'define', 'the', 'purpose', 'of', 'alt-text', '--', 'as', 'a', 'way', 'to', 'increase', 'accessibility', 'to', 'the', 'internet', 'for', 'the', 'visually', 'impaired', '--', 'but', 'then', 'dive', 'into', 'how', 'we', 'as', 'webpage', 'creators', 'can', 'think', 'critically', 'and', 'explore', 'creatively', 'within', 'this', 'defined', 'purpose.', 'The', 'authors', 'give', 'actionable,', 'practical', 'tips', 'on', 'how', 'we', 'can', 'be', 'better', 'accessibility', 'advocates', 'through', 'the', 'way', 'we', 'create', 'our', 'work,', 'which', 'to', 'be', 'honest,', 'is', 'not', 'something', 'I', 'had', 'actively', 'thought', 'about.', 'Im', 'glad', 'Ive', 'had', 'the', 'chance', 'to', 'become', 'more', 'educated', 'on', 'this', 'space', 'through', 'this', 'reading.', '1', 'How', 'will', 'the', 'style', 'and', 'way', 'alt-text', 'is', 'written', 'change', 'as', 'a', 'younger,', 'more', 'tech-savvy', 'generation', 'enters', 'the', 'workforce?', '2', 'If', 'the', 'web', 'was', 'designed', 'from', 'the', 'ground', 'up', 'to', 'include', 'and', 'service', 'the', 'visually', 'impaired,', 'what', 'would', 'it', 'look', 'like?', 'It', 'seems', 'alt', 'text', 'was', 'originally', 'designed', 'for', 'browsers', 'that', 'could', 'not', 'render', 'images,', 'not', 'as', 'a', 'way', 'to', 'support', 'the', 'visually', 'impaired.'];
    const week9 = ['Week', '9', '-', 'Ben', 'Duvall', '-', 'Selections', 'from', 'New', 'Modernism(sI', 'found', 'this', 'reading', 'to', 'be', 'among', 'the', 'denser', 'and', 'more', 'esoteric', 'ones', 'we', 'have', 'had', 'this', 'semester.', 'I', 'was', 'excited', 'by', 'the', 'topic', 'introduced', 'in', 'the', 'first', 'pages', '--', 'how', 'has', 'graphic', 'design', 'evolved', 'with', 'our', 'cultural', 'shifts', 'over', 'the', 'decades', '--', 'but', 'found', 'it', 'hard', 'to', 'follow', 'along', 'in', 'the', 'subsequent', 'deep-dives', 'into', 'modernism', 'vs.', 'post-modernism', 'vs.', 'hyper-modernism.', 'My', 'confusion', 'could', 'be', 'due', 'to', 'my', 'unfamiliarity', 'with', 'artistic', 'movements', 'in', 'general:', 'Ive', 'heard', 'of', 'the', 'terms', '"modernism"', 'and', '"post-modernism,"', 'Ive', 'been', 'to', 'museums', 'that', 'specialize', 'in', 'art', 'from', 'those', 'eras,', 'but', 'I', 'dont', 'have', 'a', 'clear', 'understanding', 'of', 'what', 'makes', 'those', 'eras', 'distinct', 'and', 'different.', 'The', 'signifier-signified', 'graphs', 'on', 'page', '7', 'were', 'helpful', '(I', 'understand', 'the', 'idea', 'of', 'modernism', 'and', 'post-modernism),', 'but', 'I', 'still', 'have', 'trouble', 'conceptualizing', 'what', 'hypermodernism', 'would', 'look', 'like', 'in', 'practice.', '1', 'What', 'are', 'other', 'examples', 'of', 'hypermodernism', 'in', 'graphic', 'design,', 'besides', 'the', 'Disney', 'example', 'Duvall', 'describes?', 'The', '"hyperlinked"-ness', 'of', 'Disney', 'seems', 'partially', 'dependent', 'on', 'its', 'long', 'use', 'and', 'history', 'as', 'a', 'symbol', '--', 'are', 'there', 'other', 'examples', 'that', 'do', 'not', 'require', 'this', 'legacy?', '2', 'Is', 'the', 'evolution', 'of', 'graphic', 'design', 'visible', 'in', 'everyday', 'websites', '(e.g.,', 'Facebook,', 'Airbnb,', 'Canvas)?', 'I', 'would', 'say', 'the', 'design', 'of', 'these', 'more', 'utilitarian', 'websites', 'would', 'fall', 'under', '"modernism":', 'one-to-one', 'signifier-to-signified', 'relationship.', 'Is', 'there', 'a', 'world', 'where', 'this', 'evolves?'];
    const week11 = ['Week', '11', '-', 'Dot', 'Tuer', '-', 'Beyond', 'the', 'New', 'Media', 'Frame', 'The', 'Poetics', 'of', 'Absence', 'in', 'Vera', 'Frenkel’s', 'String', 'GamesWe', 'have', 'talked', 'about', 'the', 'internet', 'as', 'an', 'art', 'form', '(rather', 'than', 'strictly', 'as', 'an', 'information', 'tool,', 'which', 'is', 'what', 'Im', 'used', 'it', 'seeing', 'it', 'as)', 'numerous', 'times', 'in', 'this', 'class,', 'and', 'its', 'interesting', 'to', 'read', 'about', 'artists', 'whose', 'lives', 'span', 'the', 'before', 'and', 'after', 'of', 'the', 'technology.', 'These', 'artists', 'are', 'TRUE', 'pioneers', 'of', 'the', 'web', 'as', 'art,', 'as', 'it', 'was', 'a', 'brand', 'new', 'medium', 'to', 'explore,', 'and', 'its', 'interesting', 'to', 'see', 'how', 'the', 'themes', 'they', 'based', 'their', 'art', 'around', 'still', 'persist', 'in', 'the', 'art', 'we', 'have', 'today.', 'When', 'Tuer', 'writes', 'about', 'Frenkels', 'exploration', 'in', 'String', 'Games', 'of', 'our', 'tendency', 'to', 'archive', 'despite', 'the', 'inevitability', 'of', 'lost', 'information,', 'it', 'reminds', 'me', 'of', 'the', 'themes', 'we', 'discussed', 'in', 'Week', '4', 'on', 'Geocities.', '1', 'What', 'major', 'differences/similarities', 'do', 'you', 'see', 'in', 'the', 'work', 'of', 'early', 'internet', 'artists', 'like', 'Frenkel', 'vs.', 'todays?', '2', 'What', 'was', 'your', 'interpretation', 'of', 'the', '"absence"', 'in', 'String', 'Games?'];
    const week14 = ['Week', '14', '-', 'Boris', 'Groys', '-', 'Art', 'on', 'the', 'InternetI', 'started', 'out', 'the', 'reading', 'on', 'solid', 'footing', '--', 'I', 'could', 'understand', 'Boris', 'Groys', 'reflection', 'on', 'the', 'shift', 'in', 'how', 'art', 'is', 'distributed,', 'from', 'the', 'curated', 'gallery', 'to', 'the', 'vast', 'internet', '--', 'but', 'I', 'quickly', 'became', 'lost', 'after', 'a', 'few', 'pages.', 'To', 'be', 'precise,', 'I', 'think', 'it', 'was', 'when', 'the', 'chapter', 'shifted', 'from', 'discussing', 'the', 'physical', 'difference', 'in', 'framing', 'in', 'a', 'museum', 'versus', 'a', 'computer', 'screen,', 'to', 'the', 'metaphorical', 'framing', 'of', 'how', 'we', 'see', 'the', 'work', 'in', 'the', 'context', 'of', 'its', 'surroundings,', 'whether', 'that', 'be', 'the', 'political/cultural', 'times', 'or', 'what', 'work', 'juxtaposes', 'it', 'or', 'other', 'abstract', 'concepts', 'Groys', 'alludes', 'to.', 'I', 'agree', 'that', 'changing', 'the', 'medium', 'through', 'which', 'art', 'is', 'shared', 'fundamentally', 'changes', 'something', 'about', 'the', 'art,', 'but', 'its', 'hard', 'for', 'me', 'to', 'articulate', 'exactly', 'how', 'and', 'I', 'think', 'this', 'chapter', 'personally', 'does', 'not', 'help', 'me', 'do', 'this.', 'Maybe', 'it', 'is', 'my', 'years', 'working', 'in', 'business', 'that', 'has', 'eroded', 'my', 'ability', 'to', 'engage', 'with', 'these', 'types', 'of', 'texts.', 'At', 'the', 'start', 'of', 'my', 'career,', 'I', 'was', 'drilled', 'to', 'make', 'roadmaps', 'and', 'frameworks', 'with', 'headers', 'and', 'bullets,', 'and', 'only', 'after', 'recently', 'reemerging', 'from', 'this', 'world', 'during', 'school', 'have', 'I', 'realized', 'how', 'much', 'Ive', 'come', 'to', 'rely', 'on', 'these', 'communication', 'norms.', 'Im', 'not', 'trying', 'to', 'criticize', 'Groys', 'writing,', 'for', 'I', 'think', 'he', 'has', 'some', 'thought-provoking', 'and', 'lyrical', 'metaphors,', 'but', 'Im', 'slightly', 'disappointed', 'that', 'I', 'feel', 'like', 'Im', 'not', 'the', 'right', 'audience.', '1', 'What', 'do', 'you', 'think', 'are', 'the', 'most', 'salient', 'impacts', 'on', 'a', 'piece', 'of', 'art', 'if', 'it', 'is', 'distributed', 'via', 'internet', 'vs.', 'curator?', '2', 'Which', 'mode', 'of', 'consumption', '(internet', 'vs.', 'curation)', 'do', 'you', 'prefer?', 'If', 'your', 'answer', 'is', 'it', 'depends,', 'what', 'does', 'it', 'depend', 'on?'];
    const words = week2.concat(week3, week4, week6, week9, week11, week14);


    const animationDuration = 3; // Duration of the animation in seconds
    const staggerDelay = 0.2; // Delay between each raindrop in seconds
    const raindropCount = words.length;
    
    words.forEach((word, index) => {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.textContent = word;
      raindrop.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      raindrop.style.top = '-20px'; // Start raindrops just above the screen
      
      // Calculate animation delay based on the index of the raindrop
      const animationDelay = index * staggerDelay;
      raindrop.style.animationDelay = animationDelay + 's';
      
      container.appendChild(raindrop);
    });
    
    // Calculate total duration of the rainfall
    const totalDuration = animationDuration + (raindropCount - 1) * staggerDelay;
    container.style.animationDuration = totalDuration + 's';

  }
  
  // Event listener for the button click
  document.getElementById('cloud').addEventListener('click', function() {
    const container = document.getElementById('rain-container');
    
    if (container.hasChildNodes()) {
      // Remove existing raindrops if any
      container.innerHTML = '';
    } else {
      // Create raindrops if none exist
      createRaindrops();
    }
    document.body.classList.toggle('rain-active');
    document.getElementById('page-title').classList.toggle('rain-title');
    
  });