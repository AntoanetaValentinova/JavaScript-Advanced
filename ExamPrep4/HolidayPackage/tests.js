let HolidayPackage=require('./HolidayPackage');
let {assert}=require('chai');

describe ('HolidayPackage', ()=> {
    it ('initialize', ()=> {
        let holiday=new HolidayPackage('destination','season');
        assert.deepEqual(holiday.vacationers,[]);
        assert.equal(holiday.destination,'destination');
        assert.equal(holiday.season,'season');
        assert.equal(holiday.insuranceIncluded,false);
    });
    it ('add vacantioner with empty string', ()=> {
        let holiday=new HolidayPackage('destination','season');
      assert.throw(()=>holiday.addVacationer(' '),"Vacationer name must be a non-empty string");
    });
    it ('add vacantioner with number', ()=> {
        let holiday=new HolidayPackage('destination','season');
      assert.throw(()=>holiday.addVacationer(2),"Vacationer name must be a non-empty string");
    });
    it ('add vacantioner with one name', ()=> {
        let holiday=new HolidayPackage('destination','season');
      assert.throw(()=>holiday.addVacationer('Peter'),"Name must consist of first name and last name");
    });
    it ('add vacantioner valid', ()=> {
        let holiday=new HolidayPackage('destination','season');
        holiday.addVacationer('first last')
        assert.equal(holiday.vacationers.length,1);
        holiday.addVacationer('first last')
        holiday.addVacationer('first last')
        assert.equal(holiday.vacationers.length,3);
    });
    it ('show vacantionera with empty', ()=> {
        let holiday=new HolidayPackage('destination','season');
        let result=holiday.showVacationers();
        assert.equal(result,"No vacationers are added yet");
    });
    it ('show vacantionera valid', ()=> {
        let holiday=new HolidayPackage('destination','season');
        holiday.addVacationer('first1 last1');
        holiday.addVacationer('first2 last2');
        holiday.addVacationer('first3 last3');
        let result=holiday.showVacationers();
        assert.equal(result,`Vacationers:\n` + `first1 last1\nfirst2 last2\nfirst3 last3`);
    });
    it ('getter insurance', ()=> {
        let holiday=new HolidayPackage('destination','season');
        assert.equal(holiday.insuranceIncluded,false);
        holiday.insuranceIncluded=true;
        assert.equal(holiday.insuranceIncluded,true);
    });
    it ('setter insurance valid', ()=> {
        let holiday=new HolidayPackage('destination','season');
        holiday.insuranceIncluded=true;
        assert.equal(holiday.insuranceIncluded,true);
        assert.equal(holiday._insuranceIncluded,true);
    });
    it ('setter insurance invalid', ()=> {
        let holiday=new HolidayPackage('destination','season');
        assert.throw(()=>holiday.insuranceIncluded='Peter',"Insurance status must be a boolean");
    });
    it ('generate with no vacantioners', ()=> {
        let holiday=new HolidayPackage('destination','season');
        assert.throw(()=>holiday.generateHolidayPackage(),"There must be at least 1 vacationer added");
    });
    it ('generate with vacantioners and summer or winter', ()=> {
        let holiday=new HolidayPackage('destination','Summer');
        holiday.addVacationer('first1 last1');
        holiday.addVacationer('first2 last2');
        holiday.addVacationer('first3 last3');
        let result=holiday.generateHolidayPackage();
        assert.equal(result,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1400")
        let holiday2=new HolidayPackage('destination','Winter');
        holiday2.addVacationer('first1 last1');
        holiday2.addVacationer('first2 last2');
        holiday2.addVacationer('first3 last3');
        let result2=holiday2.generateHolidayPackage();
        assert.equal(result2,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1400")
    });
    it ('generate with vacantioners and spring or autumn', ()=> {
        let holiday=new HolidayPackage('destination','Spring');
        holiday.addVacationer('first1 last1');
        holiday.addVacationer('first2 last2');
        holiday.addVacationer('first3 last3');
        let result=holiday.generateHolidayPackage();
        assert.equal(result,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1200")
        let holiday2=new HolidayPackage('destination','Autumn');
        holiday2.addVacationer('first1 last1');
        holiday2.addVacationer('first2 last2');
        holiday2.addVacationer('first3 last3');
        let result2=holiday2.generateHolidayPackage();
        assert.equal(result2,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1200")
    });
    it ('generate with vacantioners and summer or winter with taxes', ()=> {
        let holiday=new HolidayPackage('destination','Summer');
        holiday.addVacationer('first1 last1');
        holiday.addVacationer('first2 last2');
        holiday.addVacationer('first3 last3');
        holiday.insuranceIncluded=true;
        let result=holiday.generateHolidayPackage();
        assert.equal(result,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1500")
        let holiday2=new HolidayPackage('destination','Winter');
        holiday2.addVacationer('first1 last1');
        holiday2.addVacationer('first2 last2');
        holiday2.addVacationer('first3 last3');
        holiday2.insuranceIncluded=true;
        let result2=holiday2.generateHolidayPackage();
        assert.equal(result2,`Holiday Package Generated\n` +
        `Destination: destination\n` +
        holiday.showVacationers() + `\n` +
        "Price: 1500")
    });
});