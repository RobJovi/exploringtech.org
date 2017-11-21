import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
  article = {
    type: '',
    id: '',
    img: '',
    title: '',
    date: '',
    button: '',
    alert: '',
    eventSchedule: [],
    pics: [],
    paragraphs: [],
    rows: []
  };
  sub;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var id = +params['id']; // (+) converts string 'id' to a number
      this.fetchData(id);
      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  fetchData(id){
    if(id == '190783'){
      this.article.id = '190783',
      this.article.button = "register",
      this.article.eventSchedule = ["09:15 am: Check In","10:00 am: Event Begins (doors close at 10:05)","10:15 - 11:30 am: First Round Presentations",]
    }
    else if(id == '190683'){
      this.article.type = "1",
      this.article.id = '190683',
      this.article.date = 'September 4, 2017',
      this.article.rows = [
        {
          img:'article/startups.startups-1.JPG',
          text:"Although the Summer Coding Leadership Academy is over, the TXT'ers dedication to their community is not. We will continue incubating Tech start-ups at our HackerSpace - The Cube. Some include Connect Sage and The Duck. The following teens have agreed to advance their startup ideas this year while balancing their priorities at school. They are determined to take over the world starting with Los Angeles.",
          
        },
        {
          img:'article/startups.startups-2.png',
          text: "Beginning with The Duck, it is an artificial duck that keeps track of who enters or exits a building/facility. It was created to organize a way to log who comes in and out of their office space. Some of its key features include voice recognition for when a person enters or exits the premises. After identifying yourself, the Duck automatically enters the detailed log into a database at any given time. Team Zealio will continue making this one a reality.",
          
        },
        {
          img: 'article/startups.startups-3.png',
          text: "Another startup is Connect Sage. Team Corvids identified in their community that low-income young adults in Los Angeles lack the networking resources to enter careers that they are passionate about. Therefore, Connect Sage is designed to provide a medium for the young adults to find and establish connections with career mentors. Some of its key features include exploring different career paths, browsing a diverse professional network, establishing mentoring relationships and managing their connections.",
          
        },
        {
          img: 'article/startups.startups-4.png',
          text: "Many TXTers will continue working on their startups. They have made a commitment to stay focused with these startups and will leave other activities aside to improve their communities. With great determination, they will find success in their endeavors."
          
        }
      ]
    }
  }


}
