import {Component} from '@stencil/core';

@Component({
    tag: 'app-services',
    styleUrl: 'app-services.scss'
})
export class AppAbout {

    render() {
        return [
            <app-navigation presentation={true}></app-navigation>,
            <ion-content class="ion-padding">
                <main padding>

                    <h1>Services</h1>

                    <p>We aim to be transparent, therefore, furthermore than open sourcing our all code on <a href="http://github.com/deckgo/deckdeckgo">Github</a>, here are the list of services we are using to provide DeckDeckGo.</p>

                    <h2>Amazon</h2>

                    <p>We are using AWS <a href="https://aws.amazon.com/lambda/">Lambda</a>, <a href="https://aws.amazon.com/dynamodb/">Dynamo DB</a> and <a href="https://aws.amazon.com/s3/">S3</a> to save the data and publish the presentations as Progressive Web Apps online. The choice behind this is mostly the fact that we thought that the S3 solution was a good one for our purpose but beside that, it was also challenging to run Haskell Webapps on AWS Lambda.</p>

                    <h2>Google</h2>

                    <p>We are using Google Firebase <a href="https://firebase.google.com/products/hosting/">Hosting</a> and <a href="https://firebase.google.com/products/auth/">Authentication</a>. Both feature are good matchs to serve and deploy easily Progressive Web Apps. Their Authentication is also interesting as it provides the social login we were looking for (like Email and Github). Furthermore than these two services we are also using <a href="https://tenor.com/">Tenor</a>, which is owned by Google too, to provide the Gifs integration.</p>

                    <p>All these services are covered in our <ion-anchor href="/privacy" routerDirection="forward">Privacy Policy</ion-anchor> and <ion-anchor href="/terms" routerDirection="forward">Terms of Services</ion-anchor>.</p>

                </main>
            </ion-content>
        ];
    }

}