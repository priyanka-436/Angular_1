import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/Api.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'add-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.styles.css']
})

export class userComponent implements OnInit {
    addUser: FormGroup;
    public userId;
    public btnName = "Add"
    constructor(private formbuilder: FormBuilder, private service: ApiService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.addUser = this.formbuilder.group({
            id: [],
            username: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required]
        })
        if (this.route.snapshot.paramMap.get('val')) {
            this.userId = this.route.snapshot.paramMap.get('val');
            this.service.getUserById(this.userId).subscribe(result => {
                this.addUser.setValue(result.data)
                this.btnName = "Update"
            })
        }

    }

    add() {
        if (this.userId) {
            this.service.updateUser(this.addUser.value, this.userId).subscribe(response => {
                this.router.navigate(['/users'])

            })
        } else {
            this.service.addUser(this.addUser.value).subscribe(result => {
                this.router.navigate(['/users'])
            })
        }



    }
}