
	/* METADATA */
	
	var timeline = [];
	var no_trials = 4;
	var repo_site = "https://simonhanzal.github.io/prototype/";

    /* WELCOME */
    
	var welcome = {
      type: "html-keyboard-response",
      stimulus: "Welcome to the prototype experiment. Please wait a few seconds and then press any key to begin."
    };
    timeline.push(welcome);

    /* INSTRUCTIONS */
    
	var instructions = {
      type: "html-keyboard-response",
      stimulus: "<p>In this experiment, a number will appear in the center " +
          "of the screen.</p><p>If the number is <strong>3</strong>, " +
          "do not press anything.</p>" +
          "<p>If it is any other number between <strong>0-2</strong> or <strong>4-9</strong>, press the Space Bar " +
          "as fast as you can.</p>" +
	  "<p></p>" +
	  "<p>Make sure the experiment is open in an active window, displayed in the center, your keyboard is connected to "+
	  "the computer and that there are no distractions around you.</p>" +
	  "<p></p>" +	
          "<p>Press any key to begin.</p>",
      post_trial_gap: 2000
    };
    timeline.push(instructions);

    /* TRIALS */
	
	var test_stimuli = [
      { stimulus: '<div style="font-size:60px;">1</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">2</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">3</div>', data: { test_part: 'test', correct_response: 'None' } },
      { stimulus: '<div style="font-size:60px;">4</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">5</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">6</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">7</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">8</div>', data: { test_part: 'test', correct_response: 'Space' } },
	  { stimulus: '<div style="font-size:60px;">9</div>', data: { test_part: 'test', correct_response: 'Space' } }
    ];

    var fixation = {
      type: 'html-keyboard-response',
      stimulus: "<p></p>",//'<div style="font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 15,
      data: {test_part: 'fixation'}
    }

    var test = {
      type: "html-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['f1','Space'],
	  stimulus_duration: 250,
	  trial_duration: 1135,
	  response_ends_trial: false,
      data: jsPsych.timelineVariable('data'),
	  on_finish: function(data){
		data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
		data.three = data.stimulus == '<div style="font-size:60px;">3</div>';
		if(data.correct == true){
		  data.type == 1;
		} else {
		  data.type == 0;
	       }
	},
    }

    var test_procedure = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli,
      repetitions: no_trials,
	  randomize_order: true
    }
	timeline.push(test_procedure);
	
	var debrief_block = {
	    type: "html-keyboard-response",
	    stimulus: function() {
			
		/* BASIC NUMBER CALCULATIONS */
		
		var trials = jsPsych.data.get().filter({test_part: 'test'});
		var correct_trials = trials.filter({correct: true});
		var correct_relevant = correct_trials.filter({three: true});
		var go_trials = trials.filter({three: false});
		var correct_go_trials = correct_trials.filter({three: false});

		var correct_no_go = correct_relevant.count();
		var incorrect_no_go = no_trials - correct_relevant.count();
		var correct_go = correct_trials.count() - correct_no_go;
		var incorrect_go = no_trials * 8 - correct_go;
		
		/* ANALYTIC CALCULATIONS */
		
		var accuracy = Math.round(correct_trials.count() / trials.count() * 10000) / 100;
		
		var minimum = Math.round(correct_go_trials.select('rt').min());
		var maximum = Math.round(correct_go_trials.select('rt').max());
		
		var trial_data1 = Object.entries(correct_go_trials.select('rt'));
		var trial_data2 = trial_data1.slice(0,1).toString();
		var trial_data3 = trial_data2.split(",");
		var trial_data_array = trial_data3.slice(1);
		var trial_data_word = trial_data_array.join(";");
		    
		var trial_value1 = Object.entries(trials.select('type'));
		var trial_value2 = trial_value1.join(";");
		
		var rt = Math.round(correct_trials.select('rt').mean());
		var true_rt = Math.round(correct_go_trials.select('rt').mean()*100)/100;
		var no_go_rt = Math.round(correct_relevant.select('rt').mean());
		var sd1 = trial_data_array.map(fc);

		 function fc(value) {
		const mean = true_rt
		return (value - true_rt) ** 2;
		}
		var sd2 = sd1.reduce((a,b) => a + b, 0);
		var sd3 = sd2/sd1.length;
		var sd4 = Math.sqrt(sd3);
		var deviation = Math.round(sd4*100)/100;
		
			
			return "<p>PRESS ANY KEY TO "+ trial_value2 +"CONTINUE!</p>";
		
		}
	};
	timeline.push(debrief_block);

